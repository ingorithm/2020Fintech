var fs = require('fs');

console.log('first func');
fs.readFile('./example/test.txt', 'utf8', function(err, result) {
    if (err) {
        console.error(err);
        throw err;
    }
    else {
        // 하드디스크에서 파일을 읽어서 시간이 오래걸림
        console.error("두번째 기능인데 파일을 읽어오느라 시간이 조금 걸려요");
        console.log(result);
    }
});

console.log("third func");

// var fs = require('fs');

// console.log('first func');
// var data = "";
// fs.readFile('./example/test.txt', 'utf8', function(err, result) {
//     if (err) {
//         console.error(err);
//         throw err;
//     }
//     else {
//         data = result;
        
//     }
// });

// console.log(data);
// console.log("third func");
