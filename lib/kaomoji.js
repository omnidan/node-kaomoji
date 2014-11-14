/*jslint node: true*/
"use strict";

/**
 * Kaomoji class
 */
function Kaomoji() {
  try {
    this.kaomoji = require('./kaomoji.json');
  } catch (err) {
    throw new Error('kaomoji.json invalid or not readable.');
  }
}

module.exports = new Kaomoji().kaomoji;