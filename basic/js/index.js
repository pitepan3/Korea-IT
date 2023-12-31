// console.log("Hello JavaScript");


/*
    JavaScript 튜토리얼

    1 데이터 타입과 기본 메서드
    2 연산자
    3 조건문
    4 반복문
    5 변수
    6 함수
    7 배열
    8 객체
    9 클래스
    10 에러와 에러처리
    11 비동기 작업
    12 JSON
*/


/*
    데이터 타입

    1 String
    2 Number
    3 Boolean
    4 null
    5 undefined
    6 BigInt
*/


/*
    1 String (문자열)
    연속된 문자를 나타낸다
*/

// var foo = "bar"; // 따옴표 안에 문자를 입력한다

// console.log(foo); // bar

// console.log(typeof foo); // string

// console.log(foo[0]) // b
// console.log(foo[1]) // a
// console.log(foo[2]) // r

// // 문자의 갯수
// console.log(foo.length) // 3


/*
    2 Number
    (-2의 1024제곱 빼기 1 ~ 2의 1024제곱 빼기 1)
    -2^1024 - 1에서 2^1024 -1 사이의 숫자를 나타낼 수 있다

    값의 종류:
        정수, 소수, NaN(Not a Number), +Infinity, -Infinity

*/


// 정수
// var year = 2023;

// console.log(year) //2023
// console.log(typeof year) // number

// // 소수
// var pi = 3.14;

// console.log(pi); // 3.14


// // NaN
// var nan = 2 - "foo";

// console.log(nan); // NaN 숫자로 표현할 수 없음


// // Number 이 표현할 수 있는 가장 큰수
// var max_value = Number.MAX_VALUE;

// console.log(max_value) // 2의 1024제곱

// // Number가 표현할 수 있는 가장 작은 수
// var min_value = -Number.MAX_VALUE;

// console.log(min_value); // -2의 1024제곱

// // +Infinity

// var infinity = Number.MAX_VALUE * 1.1;

// console.log(infinity); // Infinity = 2의 1024제곱보다 큰 수

// // -Infinity

// var negaive_infinity = Number.MAX_VALUE * 1.1;

// console.log(-infinity); // -Infinity = -2의 1024제곱보다 작은 수


/*
    3 Boolean
    참 또는 거짓의 값을 갖는다 (true or false)
*/

// var bool = true;

// console.log(bool); // true

// console.log(typeof bool); // boolean

// var bool = false;

// console.log(bool); // false

// // 비교연산은 boolean을 리턴한다
// console.log(1 < 0); // false
// console.log(1 > 0); // true



/*
    4 null
    값이 없음을 나타낸다
*/


// var foo = null;

// console.log(foo); // null

// console.log(typeof foo); // object


/*
    5 undefined
    정의되지 않은 변수
*/

// var foo;

// console.log(foo); // undefined
// console.log(typeof foo); // undefined

/*
    6 BigInt
    safe integer 밖의 정수를 나타낸다
    숫자뒤에 n을 붙여서 Bigint 값을 만들 수 있다

    safe integer(안전한 정수)의 범위: -(2^53 - 1) ~ 2^53 - 1

    안전한 정수: Number타입이 정확하게 표현할 수 있는 정수
*/


// 안전한 정수의 최대값
// var max_safe_value = Number.MAX_SAFE_INTEGER;

// console.log(max_safe_value)

// 안전한 정수의 최소값
// var min_safe_value = Number.MIN_SAFE_INTEGER;
// console.log(min_safe_value);

//9가 16개
// var not_safe_integer = 9999999999999999;

// console.log(not_safe_integer); // 안전한 정수 밖의 수는 정확하게 표현(출력)할 수 없다. 10000000000000000

// var bigint = 9999999999999999n; // 정확하게 표현(출력)하기 위해서 숫자 뒤에 n을 붙여준다.

// console.log(bigint); // 9999999999999999n

// console.log(typeof bigint); // bigint


/*
    1 Number 타입이 표현할 수 있는 숫자의 범위
    -(2^1024 - 1) ~ 2^1024 - 1

    2 안전한 정수의 범위
    -(2^53 - 1) ~ 2^53 - 1

    3 없음을 나타내는 데이터 타입
    null

    4 정의되지 않은 변수를 나타내는 용어는?
    undefined
*/



/*
    기본 데이터타입의 메서드

    메서드란? :  데이터에 특정한 작업을 수해한다

    1 string 메서드
    2 number 메서드
*/


/*
    1 String(문자열) 메서드

    toUpperCase(), toLowerCase()
    trim()
    concat()
    split()
*/


// toUpperCase() : 문자열의 모든 문자를 대문자로 변환한다
// toLowerCase() : 문자열의 모든 문자를 소문자로 변환한다

// var foo = "barBAR";

// console.log(foo.toUpperCase()); // BARBAR
// console.log(foo.toLowerCase()); // barbar


// trim() : 문자열의 앞, 뒤 공백을 제거한다

// var foo = "  foo  ";

// console.log(foo.trim()); // foo


// concat() : concatenate 연결
// var foo = "Hello";
// var bar = "JavaScript";

// var result = foo.concat(" ", bar);

// console.log(result); // Hello JavaScript

// split() : 문자열을 나누는 메서드, 배열을 리턴한다(띄어쓰기 기준)

// var foo = "Hello JavaScript";

// console.log(foo.split(" ")); // [ 'Hello' , 'JavaScipt' ]


/*
    2 Number 메서드

    toPrecision()
    isInteger()
    isNaN()
*/


// toPrecision() : 정밀도

// var pi = Math.PI;

// console.log(pi); // 3.141592653589793
// console.log(pi.toPrecision(50)); // 3.1415926535897931159979634685441851615905761718750 무리수인 pi값의 50자리까지




/*
    연산자

    1 수리연산자
    2 대입연산자
    3 비교 연산자
    4 논리 연산자
    5 타입 연산자
*/


/*
    1 수리연산자

    사칙연산

    + - * /

    증가연산자
    ++

    감소연산자
    --

    제곱연산자
    **

    계수연산자
    %
*/


// 사칙연산
// var add = 1 + 1;
// var subtract = 2 - 1;
// var divide = 1 / 2;
// var multiply = 1 * 1;

// console.log(add); // 2
// console.log(subtract); // 1
// console.log(divide); // 0.5
// console.log(multiply); // 1


// 증가, 감소 연산자 : 1을 증가,감소시킨다
// var i = 1;
// i++;
// console.log(i); // 2

// var i2= 1;
// i2--;
// console.log(i2); // 0


// 제곱연산자
// var exp = 2 ** 7
// console.log(exp); // 2의 7제곱 = 128


// 계수연산자 : 나머지를 구하는 연산자
// var mod = 5 % 2;
// console.log(mod); // 5를 2로 나눈 나머지 = 1



/*
    2 대입 연산자

    변수 대입 연산자
    =
    덧셈 대입 연산자
    +=
    뺄셈 대입 연산자
    -=
    곱셈 대입 연산자
    *=
    나눗셈 대입 연산자
    /=
    제곱 대입 연산자
    **=
    계수 대입 연산자
    %=
*/


// 변수 대입 연산자
// var foo = "bar";
// console.log(foo); // bar


// 덧셈 대입 연산자
// var longVariablesName = 1;

// longVariablesName += 1;
// console.log(longVariablesName); // longVariablesName = longVariablesName + 1 = 2


/*
    3 비교 연산자

    동등연산자
    ==
    비동등연산자
    !=

    엄격동등연산자
    ===
    엄격비동등연산자
    !==

    크다
    >
    크거나 같다
    >=

    작다
    <
    작거나 같다
    <=
*/


// 동등연산자 : 권장x 정확한 비교가 불가능

// console.log(1 == 2); // false
// console.log("foo" == "bar"); // false
// console.log(2023 == "2023"); // true
// console.log(null == undefined); // true

// 엄격동등연산자(권장)

// console.log(1 === 2); // false
// console.log("foo" === "bar"); // false
// console.log(2023 === "2023"); // false
// console.log(null === undefined); // false

// 비동등연산자 : 권장x 정확한 비교가 불가능

// console.log(1 != 2); // true
// console.log("foo" != "bar"); // true
// console.log(2023 != "2023"); // false
// console.log(null != undefined); // false

// 엄격비동등연산자(권장)

// console.log(1 !== 2); // true
// console.log("foo" !== "bar"); // true
// console.log(2023 !== "2023"); // true
// console.log(null !== undefined); // true



/*
    4 논리연산자

    && (AND)
    expr 1 %% expr 2

    || (OR)
    expr 1 || expr 2

    ! (NOT)
    !expr

    expr(expression) : 코드 (표현식)
*/



// && (AND) : 두 조건이 모두 참일 때 true를 리턴한다
// console.log(1 > 0 && 1 < 2); // true

// || (OR) : 두 조건중 하나라도 참이면 true를 리턴한다
// console.log(1 > 0 || 1 > 2); // true

// ! (NOT) : 반대의 값을 리턴한다,
// console.log(!(1 > 0)); // false

// ! (NOT)  boolean 타입이 아닌 데이터를 부정할 경우 (중요)
// console.log(!null); // true
// console.log(!undefined); // true
// console.log(!0); // true
// console.log(!2023); // 0이 아닌 숫자를 부정하면 false
// console.log(!""); // 비어있는 문자열을 부정하면 true
// console.log(!"foo"); // 비어있지 않은 문자열을 부정하면 false



/*
    5 typeof 연산자
    인자의 타입을 문자열로 리턴한다
*/

// var foo = "bar";
// console.log(typeof foo); // string
// var bar = 2;
// console.log(typeof bar); // number



/*
    조건문

    1 if 조건문
    2 switch 조건문
    3 ?(삼항연산자) 조건문
*/

/*
    1 if 조건문

    if (조건) {
        조건이 참이면 실행되는 코드
    }
*/


// if 조건문

// var year = 2023;
// if(year === 2023) {
//     console.log("이번 년도"); // 조건이 참이기 때문에 "이번 년도"가 출력됨, 거짓이면 아무것도 출력되지 않는다.
// }


// if else 조건문

// var year = 2023;
// if (year === 2023) {
//     console.log("이번 년도");
// } else {
//     console.log("이번 년도가 아닙니다"); // 조건문이 참이면 "이번 년도" 출력, 거짓이면 "이번 년도가 아닙니다" 출력
// }


// if elseif else 조건문 : 마지막 else에는 조건문이 붙지 않는다.

// var year = 2022;

// if (year === 2022) {
//     console.log("작년");
// } else if (year === 2023) {
//     console.log("이번 년도");
// } else if (year === 2024) {
//     console.log("내년");
// } else {
//     console.log("가까운 년도가 아닙니다");
// }



/*
    2 switch 조건문
    엄격동등연산을 수행한다
*/

// switch 조건문
// var year = 2023;

// switch (year) {
//     case 2022:
//         console.log("작년");
//         break;

//     case 2023:
//         console.log("이번 년도");
//         break;

//     case 2024:
//         console.log("내년");
//         break;

//     default:
//         console.log("가까운 년도가 아닙니다");
// }



/*
    3 ?(삼항연산자)

    조건 ? 값1: 값2

    조건이 참이면 값1을 리턴한다
    조건이 거짓이면 값2를 리턴한다
*/

// ?(삼항연산자)
// var year = 2023;
// var result = year === 2023 ? "이번 년도" : " 이번 년도가 아닙니다";
// console.log(result); // 조건이 참이기 때문에 값1 이번 년도



// 나이가 성인이면 "성인입니다" 그렇지 않으면 "성인이 아닙니다"를 수행하는 조건문을 만들어 보세요.
// if 조건문 삼항연산자 두가지 방법

// var age = 20;

// if (age >= 18) {
//     console.log("성인입니다");
// } else {
//     console.log("성인이 아닙니다");
// }

// var result = age >= 18 ? "성인입니다" : "성인이 아닙니다";
// console.log(result);



/*
    반복문
    반복적인 작업을 수행한다

    1 for 반복문
    2 while 반복문
*/

// for 반복문
// for (var i = 1; i <=10; i++) {
//     console.log(i + "번 실행되었습니다")
// }


// 1부터 10까지의 합을 구하시오
//  var sum = 0;
//  for (var i = 1; i <=10; i++) {
//      sum += i; // 더하기 대입 연산자, sum = sum + i
//      }
//  console.log(sum); // 55


// while 반복문

// var i = 1; // 변수 초기화
// while (i <= 10) { // while ( 조건 )
//     console.log(i + " 번 실행되었습니다")

//     // 변수값 증가
//     i++;
// }



// 1 + 1/2 + 1/3 + ... 1/10 까지의 합을 구하세요
//for 반복문 이용

// var sum = 0;

// for (var i = 1; i <= 10; i++) {
//     sum += (1/i);
// }
// console.log(sum);



/*
    변수
    값을 저장하는 컨테이너

    1 기본 사용
    2 변수의 범위
*/


// 1 기본 사용

// var foo = "bar"; // 변수 초기화
// console.log(foo);


// var foo = "bar"; // 변수 초기화
// foo = "baz"; // 값을 재할당 가능
// console.log(foo);


// var foo; // 변수 선언
// foo = "bar"; // 나중에 값 할당 가능
// console.log(foo);


// 2 변수의 범위

// 전역변수 (global)

// 함수 밖에서 선언된 변수. 소스코드 어디에서든지 접근 가능하다.
// var varInGlobal = true;
// console.log(varInGlobal); // 접근 가능

// 지역 변수 (local)
// 함수 내에서 선언된 변수. 해당 함수 내에서만 접근 가능하다.

// function f() {
//     var varInFunmction = true;
// }

// console.log(varInFunmction); // varInFunction is not defined



/*
    함수
    호출할 때만 실행되는 코드

    1 함수 선언
    2 Hoisting
    3 매개변수와 인자
    4 return
    5 callback
*/

/*
    함수 선언 방법

    1 함수 선언식
    2 함수 표현식
*/

// 1 함수 선언식
// function 함수이름() {함수정의}

// function f() {
//     console.log("foo");
// }

// f(); // 함수 호출



// 2 함수 표현식
// 변수에 익명함수를 할당한다

// var f = function () {
//     console.log("foo");
// }

// f(); // 호출


/*
    2 Hoisting (게양)
*/

// f();

// // 함수 선언이 호출 시점보다 위로 올라간다
// // 함수 선언식에만 해당된다
// function f() {
//     console.log("foo");
// }


// f(); // f is not defined

// var f = function () {
//     console.log("foo")
// }




// 3 매개변수와 인자

// function add(x, y) { // x, y: 매개변수 (인자를 치환한 변수)
//     console.log("결과", x + y);
// }

// add(1, 2); // 1, 2 : 인자 (함수에 실제로 전달되는 값)



// 4 return

// function add(x, y) {
//     return x + y; // 함수가 결과를 반환한다
// }

// var r = add(1, 2);

// console.log(r);



// 5 callback
// 함수 인자

// function f(callback) {
//     let r = callback(); // callback 호출
//     console.log(r);
// }

// function cb() {
//     return "foo";
// }

// f(cb); // cb : callback


// callback 예시

// function getTime () {

//     //현재 시간을 리턴하는 함수
//     var time = new Date().toLocaleTimeString();
//     console.log(time);
// }

// // setInterval(callback, ms)
// // ms마다 callback을 실행한다
// // 1000ms = 1s
// setInterval(getTime, 1000);




// 예시.... 나이가 18세 이상이면 "성인입니다" 그렇지 않으면 "성인이 아닙니다"를 출력하는
// 함수를 선언해보세요
// (나이를 인자로 전달하세요)

// function f(x) {

//     if (typeof x !== "number") {
//         console.log("인자는 숫자만 가능합니다");
//         return; // 함수의 실행을 중단한다
//     } 
//     if (x >= 18) {
//         console.log("성인입니다");
//     } else {
//         console.log("성인이 아닙니다");
//     }
// }

// f("aaa");




/*
    배열 (Array)
    한개 이상의 값을 갖는 데이터 타입

    1 배열에 아이템에 접근하기
    2 배열 메소드
    3 배열 순화하기
*/

// 1 아이템에 접근하기

// var arr = ["foo", "bar", "baz"]; // 배열
// console.log(arr[0]); // foo : 0번째 index
// console.log(arr[1]); // bar : 1번째 index
// console.log(arr[2]); // baz : 2번째 index

// console.log(arr.length); // 3 : 아이템의 갯수


// arr[2] = "BAZ" // 2번째 index값을 "BAZ"로 수정
// console.log(arr);

// arr[3] = "lol"; // 아이템 추가
// console.log(arr);



/*
    배열의 메서드
    배열에 특정한 작업을 수행한다

    Array.push()
    Array.pop()
    Array.concat()
    Array.sort()
*/

// push()

// var arr = ["foo", "bar"];
// arr.push("baz"); // push(newItem1, newItem2, ..): 새로운 아이템을 추가한다
// console.log(arr); // foo, bar ,baz


// pop()

// var arr = ["foo", "bar", "baz"];
// arr.pop(); // 가장 마지막 아이템 1개를 제거한다
// console.log(arr); // foo, bar


// concat()

// var arr1 = ["foo", "bar"];
// var arr2 = ["baz", "lol"];

// Array1.concat(Array2): Array2를 Array1뒤에 연결한다
// concat: concatenate
// var r = arr1.concat(arr2);
// console.log(r); // foo, bar, baz, lol


// sort()

// var arr = ["foo", "bar", "baz"];
// arr.sort(); // 값이 문자열일 경우, 알파벳 순으로 정렬한다(숫자는 작은 숫자 순으로)
// console.log(arr);



/*
    배열 순회하기

    배열에 특정한 작업을 수행할 수 있다
*/

// var arr = ["foo", "bar", "baz"];

// for (var i=0; i<arr.length; i++) {
//     // 변수 i를 배열의 인덱스로 사용
//     console.log(arr[i].toUpperCase());
// }


// var arr = ["foo", "bar", "baz"];

// for (var i=0; i<arr.length; i++) {
//     if (arr[i][0] === "b") { // 인덱스값 중 b로 시작하는 값에 대해서만 출력
//         console.log(arr[i]); // bar baz
//     }
// }


// 예시1) 배열의 메서드를 사용해서 버드와이저를 맥주리스트에서 추가해보세요
// var beers = ["Guinness", "Heineken"];
// var americanBeer = "Budwiser";

// beers.push(americanBeer);
// console.log(beers)

// 예시2) 성인의 나이만 출력해보세요 (배열 순회하기)
// var ages = [12, 19, 23, 30];

// for (var i=0; i<ages.length; i++) {
//     if (ages[i] >= 18) {
//         console.log(ages[i]);
//     }
// }





/*
    객체 (Ovject)

    데이터와 함수의 집합
*/

// var cat = {
//     // 속성 (property)
//     name: "치즈",
//     home: null,

//     // 속성 값이 함수인 것을 메서드(Method)라고 한다
//     sound: function () {
//         return "야옹";
//     }
// }

// // cat 객체에 접근하기
// console.log(cat.name) // 치즈
// console.log(cat["home"]) // null
// console.log(cat.home) // null

// console.log(cat.color) // undefined

// console.log(cat.sound()) // 야옹

// // 속성 추가
// cat.age = 2;
// console.log(cat.age); // 2

// // 속성 변경
// cat.home = "삼산동";
// console.log(cat.home) // 산산동

// // 속성 삭제
// delete cat.age;
// console.log(cat.age) // undefined



// 하이네켄의 원산지에 접근해보세요
// var beers = [
//     { name: "기네스", origin: "아일랜드"},
//     { name: "하이네켄", origin: "네덜란드"},
//     { name: "버드와이저", origin: "미국"},
// ]

// console.log(beers[1].origin); // 네덜란드



/*
    클래스 (Class)
    객체를 생성하기 위한 템플릿(틀)

    1 인스턴스
    2 static 속성과 static 메서드
    3 내장 클래스
    4 리터럴 표기법
*/


// 클래스와 인스턴스
// class Cat {
//     // constructor(생성자 함수): 인스턴스의 속성을 생성한다
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // 클래스 맴버 (속성)
//     home = null;

//     // 클래스 맴버 (메서드)
//     sound() {
//         return "야옹"
//     }
// }

// // Cat의 인스턴스
// var cat = new Cat("치즈", 2);

// console.log(cat)
// console.log(cat instanceof Cat); // true

// // 인스턴스는 클래스로부터 맴버를 상속받는다
// // 코드의 재사용성을 높일 수 있다

// console.log(cat.home); // null
// console.log(cat.sound()); // 야옹

// console.log(cat.name); // 치즈
// console.log(cat.age); // 2 

/*
    2 static 속성과 static 메서드

    클래스와 인스턴스와 관련된 유용한 기능을 제공한다
*/

// class Cat {

//     // ... (생성자 함수, 클래스 맴버 등등..)

//     static family = "고양이과";

//     static isAdult(age) {
//         if (age < 1) {
//             return "아기고양이"
//         } else {
//             return "성체고양이"
//         }
//     }
// }

// // 클래스 자체가 호출한다
// console.log(Cat.family) // 고양이과
// console.log(Cat.isAdult(2)) // 성체고양이


// var pi = Math.PI; // Math클래스의 static 속성
// console.log(pi) // 3.141592653589793



/*
    자바스크립트에 내장된 클래스

    1 문자처리: String
    2 숫자 및 날짜: Number, Math, Date
    3 인덱스가 있는 컬렉션: Array
    4 에러: SyntaxError, ReferenceError, 기타 에러
    5 기타: Promise, JSON, Object
*/


// 리터럴 표기법

// var foo = new String("bar");
// // String 클래스의 인스턴스 foo
// console.log(foo); // [String: 'bar']

// var foo = "bar"; // 리터럴 표기법으로 인스턴스 생성

// // String 클래스의 인스턴스 foo
// console.log(foo);


// var year = new Number(2023);
// // Number 클래스의 인스턴스 year
// console.log(year); // [Number: 2023]

// var year = 2023; // 리터럴 표기법으로 인스턴스 생성
// console.log(year); // 2023


// var o = new Object({ prop1: "foo", prop2: "bar"});
// console.log(o) // { prop1: 'foo', prop2: 'bar' }

// var o = { prop1: "foo", prop2: "bar"} // 리터럴 표기법으로 인스턴스 생성
// console.log(o) // { prop1: 'foo', prop2: 'bar' }


// 객체 ?
// {key: value}
// var foo = "bar"; // 객체 (속성과 메서드를 가지고 있다)
// console.log(foo.toUpperCase()) // foo의 메서드


/*
    클래스 예제
    다음의 조건을 가진 클래스를 정의해보고 인스턴스를 생성해보세요

    클래스 이름: Beer
    인스턴스의 속성: name, origin

    클래스 맴버(속성)
    history: 기원전 3000년

    클래스 맴버(메서드)
    recipe(제조법): 밀, 홉, 효모, 물

    static 속성
    caution(주의): 지나친 음주는 돈이 많이 듭니다
*/

// class Beer {
//     constructor(name, origin) {
//         this.name = name;
//         this.origin = origin;
//     }
    
//     history = "기원전 3000년";

//     recipe() {
//         return "밀, 홉, 효모, 물";
//     }

//     static caution = "지나친 음주는 돈이 많이 듭니다";
// }

// var irishBeer = new Beer("기네스", "아일랜드");
// var dutchBeer = new Beer("하이네켄", "네덜란드");

// // Beer클래스의 인스턴스
// console.log(irishBeer); // Beer { history: '기원전 3000년', name: '기네스', origin: '아일랜드' }
// console.log(dutchBeer); // Beer { history: '기원전 3000년', name: '하이네켄', origin: '네덜란드' }

// // static 속성
// console.log(Beer.caution); // 지나친 음주는 돈이 많이 듭니다




/*
    에러와 에러처리

    1 에러 개념
    2 에러 처리
    3 에러의 종류
    4 커스텀 에러
*/

/*
    1 에러 개념
    에러는 프로그램을 중단시킨다
    에러는 반드시 처리되어야 한다
*/

// console.log(foo); // ReferenceError: foo is not defined, [nodemon] app crashed




/*
    2 에러처리
    try / catch
*/

// try { // 코드를 작성한다

//     // ....

//     console.log(foo)
// } catch (error) { // 에러 처리
//     console.error(error);
// }




/*
    3 에러의 종류

    SyntaxError
    ReferenceError
    TypeError
    RangeError
    URIError
*/

// ReferenceError: 존재하지 않는 변수를 참조할 때
// console.log(foo); // ReferenceError: foo is not defined


// SyntaxError(문법에러): 컴파일 에러를 발생시키고, (try / catch) 에러 처리를 할 수 없다
// console.log(2023)) // SyntaxError: Unexpected token ')'


// TypeError: 변수, 매개변수가 유효한 타입이 아닐 때
// setInterval(callback, ms)
// setInterval(null, 1000); // TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received null


// RangeError(범위에러): 변수가 정해진 범위를 벗어났을 때 발생한다
// var pi = Math.PI;
// console.log(pi.toPrecision(200)); // RangeError: toPrecision() argument must be between 1 and 100


// URIError
// console.log(decodeURI("%")); // URIError: URI malformed




/*
    커스텀 에러
    필요할 경우 에러를 발생시킨다
*/

// try {
//     var age = 15;

//     console.log("학생:", "아저씨 담배하나 사주세요");

//     if (age < 18) {
//         // 커스텀 에러를 던진다
//         throw "미성년자는 담배를 살 수 없습니다"
//     }

//     // throw 밑의 코드는 실행되지 않는다
//     console.log("CU직원:", "네 여기있습니다");

// } catch (error) { // 에러 처리
//     console.error(error);
// }



/*
    비동기 작업
    블로킹(blocking)을 방지하기 위해 사용된다
    예) 서버에 데이터를 요청하는 작업 등

    1 동기 작업
    2 비동기 작업
*/

// 1 동기 작업
// 코드가 순서대로 실행된다
// 대부분의 작업은 동기 작업이다

// function f() {
//     console.log("foo");
// }

// f();
// console.log("bar");



// 2 비동기 작업
// 서버에 데이터를 요쳥하는 예시
// 빠른 것부터 실행된다

// 서버에 데이터를 요청하는 함수
// function fetchData(callback) {
//     var data = { foo: "bar"};

//     setTimeout(function () {
//         callback(data);
//     }, 1000)
// }

// // 서버가 응답을 하는 데 1초가 걸린다고 가정한다
// fetchData(function (data) {
//     console.log("서버로부터 전송받은 데이터:", data)
// })

// console.log("다음 작업")



/*
    JSON (FavaScript Object Notation)
    자바스크립트 객체를 저장하거나 전송하기 위한 포맷

    1 객체와 JSON
    2 JSON.stringify()
    3 JSON.parse
*/


// 1 객체와 JSON

// var o = { foo: "bar" }; // 객체
// var json = '{ "foo": "bar" }'; // JSON

// console.log(typeof o); // object
// console.log(typeof json); // string


// 2 JSON.stringify()
// 객체를 JSON으로 변환한다

// var o = { foo: "bar"};
// var json = JSON.stringify(o);

// console.log(json); // {"foo":"bar"}
// console.log(typeof json); // string (원래는 object이지만 string으로 변환)


// 3 JSON.parse
// JSON을 객체로 변환한다

// var json = '{ "foo" : "bar" }';
// var o = JSON.parse(json);

// console.log(o); // 객체 { foo: 'bar' }
// console.log(typeof o); // object (원래는 string이지만 object로 변환)