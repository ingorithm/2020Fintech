const request = require('request');
var parseString = require('xml2js').parseString;

request('http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109', function (error, response, body) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    var xml = body;
    parseString(xml, function (err, result) {
        // console.dir(result);
        // work2 : wf 태그 안에 있는 기상 예보 값을 불러오기
        console.dir(result.rss.channel[0].item[0].description[0].header[0].wf[0]);
    });
});
