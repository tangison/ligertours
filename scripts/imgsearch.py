#!/usr/bin/env python3
"""Image search wrapper: runs z-ai image-search, captures stdout (banner + JSON),
extracts the JSON payload, saves cleaned file. Usage: imgsearch.py KEY "QUERY"."""
import json
import subprocess
import sys
import time

def main():
    key, query = sys.argv[1], sys.argv[2]
    out = f"{key}.json"
    for attempt in range(3):
        try:
            r = subprocess.run(
                ["z-ai", "image-search", "-q", query, "--count", "6", "--gl", "us", "--no-rank"],
                capture_output=True, text=True, timeout=200,
            )
            text = r.stdout
            start = text.find("{")
            if start == -1:
                raise ValueError("no JSON in output")
            data = json.loads(text[start:])
            if data.get("success") and data.get("results"):
                with open(out, "w") as f:
                    json.dump(data, f, indent=1)
                print(f"{key} -> OK {len(data['results'])}")
                return
            raise ValueError(f"api fail: {data.get('error', 'empty')}")
        except Exception as e:  # noqa: BLE001
            print(f"{key} attempt {attempt + 1} failed: {e}")
            time.sleep(30)
    print(f"{key} -> FAIL")

if __name__ == "__main__":
    main()
