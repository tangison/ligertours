#!/bin/bash
# First-view weight audit for https://ligertoursnamibia.com budget (500KB)
BASE="${1:-http://127.0.0.1:3000}"
TOTAL=0
count=0
echo "Fetching first-view assets from $BASE ..."
HTML=$(curl -s "$BASE/")
# collect asset URLs from HTML (css, js, images marked priority, fonts)
URLS=$(echo "$HTML" | grep -oE '(src|href)="/_next/static/[^"]+\.(js|css)"|/fonts/[^"]+\.woff2|/_next/image\?[^"]*(safari-vehicle|priority)[^"]*' | sed 's/.*="//;s/"$//' | sort -u)
# hero image is next/image optimized: find priority image url
HERO=$(echo "$HTML" | grep -oE '/_next/image\?[^"]*safari-vehicle[^"]*' | head -1)
[ -n "$HERO" ] && URLS="$URLS $HERO"
for u in $URLS; do
  SIZE=$(curl -s -H "Accept-Encoding: gzip, br" -o /dev/null -w "%{size_download}" "$BASE$u")
  [ -z "$SIZE" ] && SIZE=0
  TOTAL=$((TOTAL + SIZE))
  count=$((count + 1))
  printf "  %8d B  %s\n" "$SIZE" "$u"
done
echo "-----------------------------------"
printf "ASSETS: %d | TOTAL: %d KB of 500 KB budget\n" "$count" $((TOTAL / 1024))
