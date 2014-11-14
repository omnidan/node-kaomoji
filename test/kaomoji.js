/*jslint node: true*/
/*jslint expr: true*/
/*global describe, it*/
"use strict";

var should = require('should');
var kaomoji = require('../index');

describe("kaomoji.js", function () {
  it("should return an kaomoji code", function () {
   var lenny = kaomoji.lenny[3];
   should.exist(lenny);
   lenny.should.be.exactly('(^・ω・^ )');
  });
});