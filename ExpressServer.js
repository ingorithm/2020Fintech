const express = require('express');
const app = express();
const path = require('path');
 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// json 형태, req body로 데이터를 받는 것을 허용하기 위해서
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));    // to use static asset

console.log('server ready');

// 각각 모두 router
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/sendtest', function (req, res) {
    res.send('안녕하세요. express 프레임 워크 res.send test입니다.');
});

app.get('/test', function (req, res) {
    res.render('test');
});

app.get('/test2', function (req, res) {
    res.render('test2');
});

// 웹브라우저는 get으로만 요청
app.get('/inputTest', function (req, res) {
    res.render('inputTest');
});

app.post('/inputTest', function (req, res) {
    console.log('request!!');
    console.log(req.body.userIdBody);
    console.log(req.body.userPasswordBody);
    res.json(123456);
});

app.listen(3000);
