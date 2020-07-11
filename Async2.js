function aFunc() {
    setTimeout(function () {
        console.log('a');
        // bFunc();
        // 유지보수 시 굉장히 어려움
    },1700)
}
function bFunc() {
    setTimeout(function () {
        console.log('b');
        // cFunc();
    },1000)
}
function cFunc() {
    setTimeout(function () {
        console.log('c');
    },500)
}

aFunc();
bFunc();
cFunc();

// 비동기식 방식
// c -> b -> a 순으로 출력
