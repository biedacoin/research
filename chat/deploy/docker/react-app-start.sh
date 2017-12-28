#!/usr/bin/env sh

set -euo pipefail

envsubst '' \
    </nginx.conf.envsubst \
    >/etc/nginx/nginx.conf

mkdir -p /run/nginx/

exec nginx -c /etc/nginx/nginx.conf

# vim:ts=4:sw=4:et:syn=sh:
