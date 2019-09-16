#!/bin/sh

sudo npm run build
sudo nginx -s reload