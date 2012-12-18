var jsdom = require('jsdom');

jsdom.env({
	html: 'http://www.google.com/talk/service/badge/Show?tk=z01q6amlq8pn6d85juthr2ccanc75cdr33g1b007d9eosm48ngqg2huclm6bgoea35vot2gldlo1mcc7gekmofskv34ib99h73ph1spi4gt764knotk7ai6arg1sqsk5r78ldasob1uq5lc0v9ll6g1iu1kfqegn4bs1odlloij1n015h8u1td25qbu7til3qvg',
  scripts: [
    'http://code.jquery.com/jquery-1.5.min.js'
  ],
  done: function(errors, window) {
    var $ = window.$;
//    $('.r').each(function() {console.log($(this).text())});
    console.log($($('.r')[1]).text());
  }
});
