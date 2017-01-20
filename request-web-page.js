const fs = require('fs');
const request = require('request');

const URLs = [
  'http://movie.douban.com/subject/1292052/', // 肖申克的救赎 The Shawshank Redemption (1994)
];

URLs.forEach(url => {
  request({
    url: url,
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'
  }, (error, response, body) => {
    if (error) {
      return console.error(error);
    }

    console.log('成功爬取到页面：', url);

    var fileStream = fs.WriteStream('./html-page.html');
    fileStream.write(body);
    fileStream.end();
  });
});

