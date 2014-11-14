var path = require('path');
var fs = require('fs');
var jsdom = require("jsdom");

var sorted_result;

jsdom.env({
  html: fs.readFileSync(path.join(__dirname, "/kaomoji.html"), "utf8"),
  scripts: ["https://code.jquery.com/jquery-2.1.1.min.js"],
  done: function (errors, window) {
    var $ = window.$;
    var count = 0;
    var toggle = 0;
    var result = [[]];

    // parse kaomoji
    $("table").each(function(i, table) {
      if (toggle < 2) {
        $(table).find('td').each(function(i, td) {
          result[count].push($(td).text());
          toggle++;
        });
      } else {
        result.push([]);
        toggle = 0;
        count++;
      }
    });

    // clean up
    result[1].pop();
    result[2].pop();
    result[2].pop();
    result[4].pop();
    result[5].pop();

    // sort into categories
    sorted_result = {
      'angry':   result[0],
      'bears':   result[1],
      'birds':   result[2],
      'cats':    result[3],
      'lenny':   result[4],
      'dongers': result[5]
    };

    // write to kaomoji.json
    fs.writeFile(path.join(__dirname, 'kaomoji.json'), JSON.stringify(sorted_result), function(err) {
      if(err) {
        console.error('Error:', err);
      } else {
        console.log('Done.');
      }
    });
  }
});