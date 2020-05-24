#!/bin/bash
VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
docker build --no-cache -t eu.gcr.io/hocelot-gcloud/ui-goliath-layout:${VERSION} -t eu.gcr.io/hocelot-gcloud/ui-goliath-layout:latest .

gcloud docker -- push eu.gcr.io/hocelot-gcloud/ui-goliath-layout:${VERSION}
gcloud docker -- push eu.gcr.io/hocelot-gcloud/ui-goliath-layout:latest