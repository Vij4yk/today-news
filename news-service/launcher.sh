#!/bin/bash
sudo systemctl start redis
sudo systemctl start mongod

pip3 install -r requirements.txt

python3 service.py

echo "=================================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES." PRESSKEY

kill $(jobs -p)