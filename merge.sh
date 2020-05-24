#!/bin/bash
function message(){
  echo "$1" | boxes -d $2
}

git add ./package.json
git commit -m "new version"
VERSION=$(cat ./package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
BRANCH=$(git ls-remote --heads origin | grep $(git rev-parse HEAD) | cut -c53-)

message "Releasing version: $VERSION" "shell"

git checkout master
git merge --no-ff origin/${BRANCH} -m "Automated merge to release version $VERSION"
git push -f origin master

git tag $VERSION

git push origin $VERSION

git push --tags