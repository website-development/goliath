#!/bin/bash
ORIGIN_BRANCH=$ghprbSourceBranch
VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')

 	cat > build.properties <<EOF
version=${VERSION}
branch=${ghprbSourceBranch}
repo=${repositoryName}
prId=${ghprbPullId}
gitUrl=${ghprbAuthorRepoGitUrl}
EOF