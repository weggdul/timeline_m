#!/bin/bash

while [ true ]; do

sleep 1200
git pull
cp /etc/nginx/nginx.conf_cur /etc/nginx/nginx.conf
nginx -s reload

done
