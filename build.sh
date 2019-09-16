#!/bin/sh

sudo npm install
sudo npm run build
sudo nginx -s reload