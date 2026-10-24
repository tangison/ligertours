#!/usr/bin/env python3
"""Download all candidates, build per-subject contact sheets for visual QA."""
import json
import os
import subprocess
import sys

BASE = "/home/z/my-project/scripts/img-hunt"

subjects = [
    "elephants", "quivertree", "canyon", "flamingos", "spitzkoppe",
    "coast", "nightsky", "windhoek", "potjie", "sundowner", "kalahari",
]

def download(url, dest):
    for _ in range(3):
        r = subprocess.run(["curl", "-sL", "--max-time", "60", "-o", dest, url])
        if r.returncode == 0 and os.path.getsize(dest) > 5000:
            return True
    return False

def main():
    manifest = {}
    for key in subjects:
        path = os.path.join(BASE, f"{key}.json")
        data = json.load(open(path))
        items = []
        for i, r in enumerate(data["results"]):
            ext = ".jpg"
            dest = os.path.join(BASE, f"{key}-{i}{ext}")
            ok = download(r["original_url"], dest)
            items.append({"i": i, "file": dest if ok else None, "src": r["source"],
                          "w": r["original_width"], "h": r["original_height"],
                          "url": r["original_url"]})
            print(key, i, "ok" if ok else "MISS", r["source"], r["original_width"])
        manifest[key] = items
    json.dump(manifest, open(os.path.join(BASE, "manifest.json"), "w"), indent=1)

if __name__ == "__main__":
    main()
