var getHTML = require('./http_functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  console.log(html.toLowerCase());

}

getHTML(requestOptions, printUpperCase);