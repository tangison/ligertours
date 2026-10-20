#!/usr/bin/env python3
"""Trace the on-dark color logo to SVG and normalize all SVG attributes (viewBox + explicit size)."""
import os, re
from PIL import Image
import vtracer

TMP = "/home/z/my-project/scripts/tmp_logo"
OUT = "/home/z/my-project/public/brand/logos/svg"
os.makedirs(TMP, exist_ok=True)

SRC = "/home/z/my-project/public/brand/logos/dark-bg/liger-tours-on-dark.png"
img = Image.open(SRC).convert("RGBA")
img = img.crop(img.getbbox())
alpha = img.split()[3]
rgb = img.convert("RGB").quantize(colors=10, method=Image.MEDIANCUT).convert("RGB")
rgb.putalpha(alpha)
flat = f"{TMP}/liger-ondark-quant.png"
rgb.save(flat)
out = f"{OUT}/liger-tours-on-dark.svg"
vtracer.convert_image_to_svg_py(
    flat, out, colormode="color", hierarchical="stacked", mode="spline",
    filter_speckle=8, color_precision=7, layer_difference=24,
    corner_threshold=60, length_threshold=4.0, splice_threshold=45, path_precision=2,
)
print(f"on-dark SVG: {out} ({os.path.getsize(out)/1024:.1f} KB)")

# Normalize: ensure every svg has viewBox; drop fixed width/height (set via CSS/img attrs)
for f in os.listdir(OUT):
    p = os.path.join(OUT, f)
    s = open(p, encoding="utf-8").read()
    m = re.search(r'<svg[^>]*width="([\d.]+)"[^>]*height="([\d.]+)"', s)
    if m and "viewBox" not in s:
        w, h = m.group(1), m.group(2)
        s = s.replace('<svg', f'<svg viewBox="0 0 {float(w):.0f} {float(h):.0f}"', 1)
    s = re.sub(r'(<svg[^>]*?)\s+width="[\d.]+"', r"\1", s, count=1)
    s = re.sub(r'(<svg[^>]*?)\s+height="[\d.]+"', r"\1", s, count=1)
    open(p, "w", encoding="utf-8").write(s)
    vb = re.search(r'viewBox="([^"]+)"', s)
    print(f"{f}: viewBox={vb.group(1) if vb else 'MISSING'} ({os.path.getsize(p)/1024:.1f} KB)")
