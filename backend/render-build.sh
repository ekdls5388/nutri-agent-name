#!/usr/bin/env bash
set -o errexit

# 1. 패키지 설치
npm install

# 2. npx 대신 로컬 경로를 사용하여 브라우저 설치 (권한 문제 회피)
./node_modules/.bin/puppeteer browsers install chrome