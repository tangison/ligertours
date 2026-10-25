#!/bin/bash
# Task 3 image scout: parallel image-search for 11 contextual Namibia subjects.
cd /home/z/my-project/scripts/img-hunt || { mkdir -p /home/z/my-project/scripts/img-hunt; cd /home/z/my-project/scripts/img-hunt; }

declare -A Q=(
  [elephants]="elephants drinking at a waterhole in Etosha National Park Namibia"
  [quivertree]="quiver tree forest silhouettes at dusk in Namibia"
  [canyon]="Fish River Canyon Namibia panoramic view evening light"
  [flamingos]="flamingos wading in Walvis Bay lagoon Namibia"
  [spitzkoppe]="Spitzkoppe granite rock formations in the Namib desert"
  [coast]="Atlantic ocean waves and sandy coast at Swakopmund Namibia"
  [nightsky]="Milky Way night sky over red dunes of the Namib desert"
  [windhoek]="Christuskirche historic church in Windhoek Namibia"
  [potjie]="cast iron potjie pot cooking over glowing campfire coals"
  [sundowner]="sundowner drinks and glasses at sunset on safari in Namibia"
  [kalahari]="red sand dunes of the Kalahari desert with dry grass"
)

pids=()
for key in "${!Q[@]}"; do
  z-ai image-search -q "${Q[$key]}" --count 8 --gl us --no-rank -o "$key.json" &
  pids+=($!)
done

for p in "${pids[@]}"; do
  wait "$p" 2>/dev/null
done

for key in "${!Q[@]}"; do
  ok=$(python3 -c "import json;d=json.load(open('$key.json'));print(d.get('success'),d.get('count'))" 2>/dev/null || echo "FAIL")
  echo "$key -> $ok"
done
