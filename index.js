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
  console.log("files:::", files);
  for (const dir of files) {
    console.log("dir:::", dir);
    if (fs.existsSync(dir)) {
      console.log("removed:::", dir);
      rimraf(dir, {}, (err) => {
        console.log("err:::", err);
      });
    }
  }
});
