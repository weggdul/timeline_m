#!/bin/bash

while [ true ]; do

sleep 1200
git pull
nginx -s reload

done
