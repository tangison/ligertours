#!/usr/bin/env python3
"""Sandwich Harbour image: clean scan specks, cut 4x5 / 1x1 / 16x9 WebP crops.

Speck removal: in the upper 60% (sky + ocean where dust dots live) replace
pixels that are much darker than a 15px median with the median value.
"""
from PIL import Image, ImageFilter
import numpy as np

SRC = "/home/z/my-project/tmp-sandwich/full.jpg"
OUT = "/home/z/my-project/public/imagery/crops"

img = Image.open(SRC).convert("RGB")
w, h = img.size
print("source", w, "x", h)

# --- speck clean, two passes ---
# Pass 1: small dark outliers (dust dots) -> replace with local median (keeps texture)
import cv2
arr = np.asarray(img)
a16 = arr.astype(np.int16)
med = cv2.medianBlur(arr, 31).astype(np.int16)
diff = (med - a16).sum(axis=2)
cand = diff > 80
cand[int(h * 0.72):, :] = False            # keep sand texture below untouched
n, labels, stats, _ = cv2.connectedComponentsWithStats(cand.astype(np.uint8), connectivity=8)
p1 = np.zeros(cand.shape, np.uint8)
for i in range(1, n):
    if stats[i, cv2.CC_STAT_AREA] <= 900:  # dots only, not real dark structures
        p1[labels == i] = 255
p1 = cv2.dilate(p1, np.ones((9, 9), np.uint8))
work = a16.copy()
work[p1 > 0] = med[p1 > 0]

# Pass 2: big smudges the 31px median cannot see -> DoG dark-blob detection,
# keep only roundish blobs (dust dots/smudges), never the elongated beach lines
gray = cv2.cvtColor(arr, cv2.COLOR_RGB2GRAY)
g1 = cv2.GaussianBlur(gray, (0, 0), 8)
g2 = cv2.GaussianBlur(gray, (0, 0), 30)
cand2 = (g2.astype(np.int16) - g1.astype(np.int16)) > 22
cand2[int(h * 0.72):, :] = False
n2, labels2, stats2, _ = cv2.connectedComponentsWithStats(cand2.astype(np.uint8), connectivity=8)
p2 = np.zeros(cand2.shape, np.uint8)
big = 0
for i in range(1, n2):
    area = stats2[i, cv2.CC_STAT_AREA]
    bw, bh = stats2[i, cv2.CC_STAT_WIDTH], stats2[i, cv2.CC_STAT_HEIGHT]
    if area < 150 or area > 45000:
        continue
    compact = area / max(bw * bh, 1)
    ar = bw / max(bh, 1)                     # aspect ratio: dots are roundish
    if compact > 0.28 and 0.45 <= ar <= 2.2:
        p2[labels2 == i] = 255
        big += 1
p2 = cv2.dilate(p2, np.ones((13, 13), np.uint8))
a = cv2.inpaint(work.astype(np.uint8), p2, 9, cv2.INPAINT_TELEA)
print(f"pass1 px {int((p1>0).sum())}, pass2 blobs {big} px {int((p2>0).sum())}")

# Pass 3: water spots on the smooth sky (bright/ring defects) -> flatten any
# deviation from a heavily blurred sky; the sky has no real texture to lose
blur = cv2.GaussianBlur(a, (0, 0), 40).astype(np.int16)
a16b = a.astype(np.int16)
sky = np.zeros(a.shape[:2], np.uint8)
sky[0:460, :] = 255
dev = np.abs(a16b - blur).sum(axis=2)
flat = dev > 15
sky &= flat.astype(np.uint8)
sky = cv2.dilate(sky, np.ones((9, 9), np.uint8))
a[sky > 0] = blur[sky > 0]
print(f"sky flattened px {int((sky>0).sum())}")

# Pass 4: the big dark blob touching the left edge (border-reflect hides it
# from every windowed detector) -> explicit rectangle inpaint
rect = np.zeros(a.shape[:2], np.uint8)
rect[700:1010, 0:160] = 255
a = cv2.inpaint(a, rect, 11, cv2.INPAINT_TELEA)
print("edge blob inpainted")

# --- crops (no upscaling for 4x5/1x1; 16x9 band gets lanczos like other bands) ---
def crop_ratio(im, rw, rh):
    w, h = im.size
    target = rw / rh
    cur = w / h
    if cur > target:  # too wide -> trim sides
        nw = int(h * target)
        x = (w - nw) // 2
        return im.crop((x, 0, x + nw, h))
    nh = int(w / target)
    y = (h - nh) // 2
    return im.crop((0, y, w, y + nh))

# 4x5 960x1200: favour the dune edge + surf (slightly right of centre)
c45 = crop_ratio(Image.fromarray(a.astype(np.uint8)), 4, 5)
tw, th = c45.size
if tw > 960:
    x0 = min(tw - 960, int((tw - 960) * 0.62))
    c45 = c45.crop((x0, 0, x0 + 960, 1200))
else:
    c45 = c45.resize((960, 1200), Image.LANCZOS)
c45.save(f"{OUT}/sandwich-harbour-ocean-dunes-4x5.webp", "WEBP", quality=78, method=6)

# 1x1 1365x1365 centre
c11 = crop_ratio(Image.fromarray(a.astype(np.uint8)), 1, 1).resize((1365, 1365), Image.LANCZOS)
c11.save(f"{OUT}/sandwich-harbour-ocean-dunes-1x1.webp", "WEBP", quality=78, method=6)

# 16x9 1920x1080 band, upscaled like other bands
c169 = crop_ratio(Image.fromarray(a.astype(np.uint8)), 16, 9).resize((1920, 1080), Image.LANCZOS)
from PIL import ImageEnhance
c169 = ImageEnhance.Sharpness(c169).enhance(1.15)
c169.save(f"{OUT}/sandwich-harbour-ocean-dunes-16x9.webp", "WEBP", quality=72, method=6)

import os
for f in ["sandwich-harbour-ocean-dunes-4x5.webp", "sandwich-harbour-ocean-dunes-1x1.webp", "sandwich-harbour-ocean-dunes-16x9.webp"]:
    p = f"{OUT}/{f}"
    print(f, os.path.getsize(p), "bytes")

# contact sheet for visual QA
sheet = Image.new("RGB", (960 + 1365 // 2 + 8, max(1200, 1365 // 2) + 8), "white")
sheet.paste(c45.resize((480, 600)), (4, 4))
sheet.paste(c11.resize((546, 546)), (492, 4))
c169.resize((640, 360)).save("/home/z/my-project/tmp-sandwich/qa-16x9.png")
sheet.resize((sheet.width // 2, sheet.height // 2)).save("/home/z/my-project/tmp-sandwich/qa-sheet.png")
print("QA sheets written")
