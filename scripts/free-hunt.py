#!/usr/bin/env python3
"""Free-license image hunt: Openverse (CC) + Wikimedia Commons for 9 subjects.
Collects candidates WITH license metadata (cc0/pdm preferred, then by, by-sa)."""
import json
import os
import subprocess
import urllib.parse
import urllib.request

BASE = "/home/z/my-project/scripts/free-hunt"
os.makedirs(BASE, exist_ok=True)

SUBJECTS = {
    "elephants":  ["elephants Etosha waterhole", "Loxodonta africana Etosha"],
    "quivertree": ["quiver tree Namibia", "Aloidendron dichotomum Namibia"],
    "canyon":     ["Fish River Canyon", "Fish River Canyon Namibia view"],
    "spitzkoppe": ["Spitzkoppe Namibia", "Spitzkoppe granite"],
    "coast":      ["Swakopmund beach Atlantic", "Namibia Skeleton Coast ocean"],
    "nightsky":   ["Namib desert night sky stars", "Milky Way NamibRand"],
    "windhoek":   ["Christuskirche Windhoek", "Windhoek city centre"],
    "potjie":     ["potjie pot fire", "cast iron pot campfire cooking"],
    "sundowner":  ["sundowner drinks safari", "sunset drinks safari Africa"],
}

UA = {"User-Agent": "LigerToursSiteBuild/1.0 (contact: info@ligertoursnamibia.com)"}

def http_json(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)

def download(url, dest):
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=90) as r, open(dest, "wb") as f:
            f.write(r.read())
        return os.path.getsize(dest) > 20000
    except Exception:
        return False

def openverse(q):
    url = ("https://api.openverse.org/v1/images/?format=json&page_size=20"
           f"&q={urllib.parse.quote(q)}&license_type=all-cc&extension=jpg")
    try:
        d = http_json(url)
    except Exception as e:
        print("  openverse error", e)
        return []
    out = []
    for r in d.get("results", []):
        out.append({
            "provider": "openverse/" + str(r.get("provider")),
            "url": r.get("url"),
            "w": r.get("width"), "h": r.get("height"),
            "license": f'{r.get("license","")} {r.get("license_version","")}'.strip(),
            "creator": r.get("creator") or "unknown",
            "landing": r.get("foreign_landing_url") or "",
        })
    return out

def wikimedia(q):
    url = ("https://commons.wikimedia.org/w/api.php?action=query&format=json"
           "&generator=search&gsrnamespace=6&gsrlimit=20"
           f"&gsrsearch={urllib.parse.quote(q + ' filetype:bitmap')}"
           "&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1800")
    try:
        d = http_json(url)
    except Exception as e:
        print("  wikimedia error", e)
        return []
    out = []
    pages = d.get("query", {}).get("pages", {})
    for p in pages.values():
        info = (p.get("imageinfo") or [{}])[0]
        md = info.get("extmetadata", {})
        def g(k):
            return (md.get(k, {}) or {}).get("value", "")
        lic = g("LicenseShortName") or "see Commons"
        out.append({
            "provider": "wikimedia",
            "url": info.get("thumburl") or info.get("url"),
            "w": info.get("width"), "h": info.get("height"),
            "license": lic.replace("&#160;", " "),
            "creator": g("Artist").replace("<[^>]+>", "")[:80] or "unknown",
            "landing": "https://commons.wikimedia.org/wiki/" + urllib.parse.quote(p.get("title", "").replace(" ", "_")),
        })
    return out

def main():
    manifest = {}
    for key, queries in SUBJECTS.items():
        cands = []
        for q in queries:
            cands += openverse(q)
            cands += wikimedia(q)
        # keep jpg-ish, reasonable width, dedupe by url
        seen, keep = set(), []
        for c in cands:
            u = c.get("url") or ""
            if not u or u in seen:
                continue
            seen.add(u)
            if int(c.get("w") or 0) < 900:
                continue
            keep.append(c)
        manifest[key] = keep[:14]
        print(key, "candidates:", len(keep))
        for i, c in enumerate(keep[:14]):
            dest = os.path.join(BASE, f"{key}-{i}.jpg")
            ok = download(c["url"], dest)
            c["file"] = dest if ok else None
            print(" ", i, c["license"], c["provider"], c.get("w"), "dl" if ok else "MISS")
    json.dump(manifest, open(os.path.join(BASE, "manifest.json"), "w"), indent=1)

if __name__ == "__main__":
    main()
