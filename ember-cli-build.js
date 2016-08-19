/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('bower_components/blueimp-md5/js/md5.min.js');
  app.import('vendor/md5-shim.js');
  return app.toTree();
};
