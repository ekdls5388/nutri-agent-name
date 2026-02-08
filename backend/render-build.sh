#!/usr/bin/env bash
set -o errexit

# 1. 의존성 설치
npm install

# 2. Puppeteer 전용 크롬 브라우저 설치
npx puppeteer browsers install chrome