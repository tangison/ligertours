#!/usr/bin/env python3
"""Convert the Liger Tours rose logo PNG to a clean SVG via palette quantization + vtracer trace.
Preserves transparency. Output: public/brand/logos/svg/"""
import subprocess, os
from PIL import Image
import vtracer

SRC = "/home/z/my-project/upload/pasted_image_1792121131664.png"
OUT_DIR = "/home/z/my-project/public/brand/logos/svg"
TMP = "/home/z/my-project/scripts/tmp_logo"
os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(TMP, exist_ok=True)

# 1) Load, trim transparent margins, quantize to a small flat palette
img = Image.open(SRC).convert("RGBA")
bbox = img.getbbox()
img = img.crop(bbox)
print("cropped size:", img.size)

# Quantize: adaptive palette of 10 colors, keep alpha
alpha = img.split()[3]
rgb = img.convert("RGB")
pal = rgb.quantize(colors=10, method=Image.MEDIANCUT)
quant = pal.convert("RGB")
quant.putalpha(alpha)

flat = f"{TMP}/liger-quant.png"
quant.save(flat)

# 2) Trace with vtracer (color, stacked, spline)
out_svg = f"{OUT_DIR}/liger-tours-primary-rose.svg"
vtracer.convert_image_to_svg_py(
    flat, out_svg,
    colormode="color",
    hierarchical="stacked",
    mode="spline",
    filter_speckle=8,
    color_precision=7,
    layer_difference=24,
    corner_threshold=60,
    length_threshold=4.0,
    splice_threshold=45,
    path_precision=2,
)
size = os.path.getsize(out_svg)
print(f"SVG written: {out_svg} ({size/1024:.1f} KB)")

# 3) Also produce a mono-cream variant for dark backgrounds:
#    flatten alpha onto cream, then binary-trace the dark silhouette
dark_src = "/home/z/my-project/public/brand/logos/mono/liger-tours-mono-cream.png"
if os.path.exists(dark_src):
    img2 = Image.open(dark_src).convert("RGBA")
    bbox2 = img2.getbbox()
    img2 = img2.crop(bbox2)
    a2 = img2.split()[3]
    rgb2 = img2.convert("RGB").quantize(colors=4, method=Image.MEDIANCUT).convert("RGB")
    rgb2.putalpha(a2)
    flat2 = f"{TMP}/liger-mono-quant.png"
    rgb2.save(flat2)
    out2 = f"{OUT_DIR}/liger-tours-mono-cream.svg"
    vtracer.convert_image_to_svg_py(
        flat2, out2,
        colormode="color", hierarchical="stacked", mode="spline",
        filter_speckle=10, color_precision=7, layer_difference=32,
        corner_threshold=60, length_threshold=4.0, splice_threshold=45,
        path_precision=2,
    )
    print(f"mono SVG: {out2} ({os.path.getsize(out2)/1024:.1f} KB)")

# 4) Icon-only variant: crop the tree+sun part (left 45% of the lockup)
w, h = quant.size
icon = quant.crop((0, 0, int(w * 0.46), h))
icon_flat = f"{TMP}/liger-icon-quant.png"
icon.save(icon_flat)
out3 = f"{OUT_DIR}/liger-icon-rose.svg"
vtracer.convert_image_to_svg_py(
    icon_flat, out3,
    colormode="color", hierarchical="stacked", mode="spline",
    filter_speckle=8, color_precision=7, layer_difference=24,
    corner_threshold=60, length_threshold=4.0, splice_threshold=45,
    path_precision=2,
)
print(f"icon SVG: {out3} ({os.path.getsize(out3)/1024:.1f} KB)")
