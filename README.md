# node-kaomoji [![Build Status](https://travis-ci.org/omnidan/node-kaomoji.svg?branch=master)](https://travis-ci.org/omnidan/node-kaomoji) [![Code Climate](https://codeclimate.com/github/omnidan/node-kaomoji/badges/gpa.svg)](https://codeclimate.com/github/omnidan/node-kaomoji)
_simple kaomoji support for node.js projects_

![node-kaomoji example](http://i.imgur.com/Lb9PSRe.png) 

## Installation
To install `node-kaomoji`, you need [node.js](http://nodejs.org/) and [npm](https://github.com/npm/npm#super-easy-install).

Once you have that set-up, just run `npm install --save node-kaomoji` in your project directory. :ship:

You're now ready to use kaomoji in your node projects! Awesome!

## Usage
```javascript
var kaomoji = require('node-kaomoji');
console.log(kaomoji.angry[0]); // returns the first angry kaomoji
console.log(kaomoji.lenny[3]); // returns the third lenny kaomoji
```

## Categories
```javascript
var kaomoji = require('node-kaomoji');
console.log(kaomoji.angry);
console.log(kaomoji.bears);
console.log(kaomoji.birds);
console.log(kaomoji.cats);
console.log(kaomoji.lenny);
console.log(kaomoji.dongers);
```

## Adding new kaomoji
Kaomoji come from [japaneseemoticons.net](http://japaneseemoticons.net/all-japanese-emoticons/) (Thanks a lot).

To update the list or add custom kaomoji, clone this repository and put them into `lib/kaomoji.html`. (Or download another page from the website)
Then run `npm run-script kaomojiparse` in the project directory or `node kaomojiparse` in the lib directory.
This should generate the new kaomoji.json file and output `Done.`.

That's all, you now have more kaomoji you can use!
