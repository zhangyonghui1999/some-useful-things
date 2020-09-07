#!/usr/bin/env sh

# 当发生错误时终止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到https://zhangyonghui1999.github.io/some-useful-things
git push -f https://github.com/zhangyonghui1999/some-useful-things.git master:gh-pages

cd -