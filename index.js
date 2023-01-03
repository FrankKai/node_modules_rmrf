#!/usr/bin/env node

const rimraf = require("rimraf");
const glob = require("glob");
const fs = require("fs");

const node_modules_dir = `node_modules`;

glob(`**/${node_modules_dir}`, {}, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  for (const dir of files) {
    if (fs.existsSync(dir)) {
      console.log("removed:::", dir);
      rimraf.sync(dir);
    }
  }
});
