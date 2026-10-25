#!/bin/bash
# Wave-based image search (3 at a time, pauses to respect rate limits).
cd /home/z/my-project/scripts/img-hunt || exit 1

search() { # key query
  if [ -s "$1.json" ] && python3 -c "import json;assert json.load(open('$1.json')).get('success')" 2>/dev/null; then
    echo "$1 -> already ok"; return
  fi
  z-ai image-search -q "$2" --count 6 --gl us --no-rank -o "$1.json" >/dev/null 2>&1
  python3 -c "import json;d=json.load(open('$1.json'));print('$1 ->',d.get('success'),d.get('count'))" 2>/dev/null || echo "$1 -> FAIL"
}

sleep 30
search flamingos "flamingos wading in Walvis Bay lagoon Namibia"
sleep 20
search quivertree "quiver tree forest silhouettes at dusk in Namibia"
sleep 20
search spitzkoppe "Spitzkoppe granite rock formations in the Namib desert"

sleep 20
search coast "Atlantic ocean waves and sandy coast at Swakopmund Namibia"
sleep 20
search nightsky "Milky Way night sky over red dunes of the Namib desert"
sleep 20
search windhoek "Christuskirche historic church in Windhoek Namibia"

sleep 20
search potjie "cast iron potjie pot cooking over glowing campfire coals"
sleep 20
search sundowner "sundowner drinks and glasses at sunset on safari in Namibia"
sleep 20
search kalahari "red sand dunes of the Kalahari desert with dry grass"

echo DONE
