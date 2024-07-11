#!/usr/bin/env sh

cd ./server && node ./bin/migrate.js && node ./bin/seed.js && node index.js
