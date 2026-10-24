#!/usr/bin/env python3
"""Second targeted pass: higher-quality queries for the weak subjects."""
import json
import os
import urllib.parse
import urllib.request

BASE = "/home/z/my-project/scripts/free-hunt2"
os.makedirs(BASE, exist_ok=True)
UA = {"User-Agent": "LigerToursSiteBuild/1.0 (contact: info@ligertoursnamibia.com)"}

def http_json(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)

def wikimedia(q, limit=25):
    url = ("https://commons.wikimedia.org/w/api.php?action=query&format=json"
           "&generator=search&gsrnamespace=6&gsrlimit=" + str(limit) +
           f"&gsrsearch={urllib.parse.quote(q + ' filetype:bitmap')}"
           "&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1800")
    try:
        d = http_json(url)
    except Exception as e:
        print("  wikimedia error", e)
        return []
    out = []
    for p in d.get("query", {}).get("pages", {}).values():
        info = (p.get("imageinfo") or [{}])[0]
        md = info.get("extmetadata", {})
        def g(k):
            return (md.get(k, {}) or {}).get("value", "")
        out.append({
            "provider": "wikimedia",
            "title": p.get("title", ""),
            "url": info.get("thumburl") or info.get("url"),
            "w": info.get("width"), "h": info.get("height"),
            "license": (g("LicenseShortName") or "see Commons").replace("&#160;", " "),
            "creator": g("Artist").replace("<[^>]+>", "").strip()[:80] or "unknown",
            "landing": "https://commons.wikimedia.org/wiki/" + urllib.parse.quote(p.get("title", "").replace(" ", "_")),
        })
    return out

SUBJECTS = {
    "spitzkoppe2": ["Spitzkoppe", "Spitzkoppe Namibia desert"],
    "coast2": ["Swakopmund jetty", "Walvis Bay lagoon", "Sandwich Harbour Namibia", "Skeleton Coast beach"],
    "nightsky2": ["NamibRand Nature Reserve night sky", "Namibia stars Namib", "Sossusvlei night"],
    "sundowner2": ["Sossusvlei sunset", "Namibia desert sunset dunes", "Etosha sunset waterhole"],
}

def download(url, dest):
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=90) as r, open(dest, "wb") as f:
            f.write(r.read())
        return os.path.getsize(dest) > 20000
    except Exception:
        return False

def usable(lic):
    l = (lic or "").lower()
    return l.startswith("cc0") or l.startswith("pdm") or "by" in l

def main():
    manifest = {}
    for key, queries in SUBJECTS.items():
        cands = []
        for q in queries:
            cands += wikimedia(q)
        seen, keep = set(), []
        for c in cands:
            u = c.get("url") or ""
            if not u or u in seen: continue
            seen.add(u)
            if int(c.get("w") or 0) < 1100: continue
            if not usable(c.get("license")): continue
            keep.append(c)
        manifest[key] = keep[:16]
        print(key, "candidates:", len(keep))
        for i, c in enumerate(keep[:16]):
            dest = os.path.join(BASE, f"{key}-{i}.jpg")
            ok = download(c["url"], dest)
            c["file"] = dest if ok else None
            print(" ", i, c["license"][:14], c.get("w"), c.get("title", "")[:48], "dl" if ok else "MISS")
    json.dump(manifest, open(os.path.join(BASE, "manifest.json"), "w"), indent=1)

if __name__ == "__main__":
    main()
