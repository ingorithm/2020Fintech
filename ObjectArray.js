var cars = [];
var car01 = {
    name : "sonata",
    ph : "500ph",
    start : function () {
        console.log("engine is starting");
    },
    stop : function () {
        console.log("engine is stoped");
    }
}
var car02 = {
    name : "BMW",
    ph : "600ph",
    start : function () {
        console.log("engine is starting");
    },
    stop : function () {
        console.log("engine is stoped");
    }
}

var car03 = {
	name : "Fiat",
	ph : "200ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

cars[0] = car01;
cars[1] = car02;
cars[2] = car03;
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// 자동차 배열 안에 BMW라는 이름의 차가 있다면 'Find!'라는 문자열 출력
// for, if 사용
console.log('-----work1-----');
for (i = 0; i < cars.length; i++) {
    //console.log(cars[i].name);
    if (cars[i].name == 'BMW') {
        console.log('Find!');
    }
}
