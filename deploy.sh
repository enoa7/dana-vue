#!/usr/bin/env sh

message=$1;

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "$message"

git push -f git@github.com:enoa7/dana-vue.git master

cd -