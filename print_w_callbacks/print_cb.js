var https = require('https');

module.exports = function getHTML (options, callback) {

  options = {
    host: requestOptions.host,
    path: requestOptions.path
  };

  https.get(options, function(response) {
    response.setEncoding('utf8');
    var html = '';

    response.on('data', function(chunk) {
      html += chunk;
      return;
    });

    response.on('end', function() {
      callback(html);
    });

  });
};

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

//an example
// var myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);
