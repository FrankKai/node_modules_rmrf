#!/usr/bin/env node

const minimist = require("minimist");
const { pathToRegexp } = require("path-to-regexp");
const rimraf = require("rimraf");

const argv = process.argv.slice(2);
console.log("minimist argv", minimist(argv));
const { dir, deep } = minimist(argv);
console.log("dir", dir);
const node_modules_dir = `${dir}/node_modules`;
const regexp = pathToRegexp(node_modules_dir);
console.log("regexp", regexp);
rimraf(node_modules_dir, function (err) {
// rimraf(regexp, function (err) {
  console.log(err);
});
