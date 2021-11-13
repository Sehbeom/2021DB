// var pi = 3.14 //변수. 사용하지 않음.
// const pi = 3.14 //상수 바뀌지 않는 값. 대부분 const 사용.
// let pi = 3.14 //변수. 바뀌는 값. 

// //======비교연산자.======
// //=== : 두 값이 타입까지 완전히 일치하는지 확인
// //== : 타입은 검사하지 않음
// //!== : 두 값이 일치하지 않는지 확인


// //======문자열======
// //`` 백틱 활용
// //${} 안에 변수를 넣어서 활용할 수 있음.
// function hello(name){
//     console.log(`Hello, ${name}!`);
// }

// hello('World!');


// //======화살표 함수======
// const hello = (name) => console.log(`Hello, ${name}!`);
// const hello = (name) => {
//     console.log(`Hello ${name}!`);
// }

// hello("World");


// //======HTML tag 접근법 : DOM======
// document.getElementById; // id 값을 토대로 접근
// document.getElementsByClassName; // class 값을 토대로 접근 
// document.getElementsByName; // name 값을 토대로 접근
// document.getElementsByTagName; // tag 를 토대로 접근
// document.querySelector; // css 선택자로 접근. id는 #, 클래스는 . 으로

// console.log(pi)



//======js 실습======
//input에 의해 입력되는 오브젝트 정보를 가져옴. getElementById
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("mail");
const userid = document.getElementById("userid");

//form 에 대한 오브젝트 정보도 가져옴
const printForm = document.getElementById("user");

const display = document.getElementById("form-result");

//함수 설정
const handlePrint = (e) => {
    e.preventDefault(); //이벤트 발생에 대한 기본적인 기능을 막음. 
    //항상 이벤트 처리할 때 커스터마이징을 위해서는 해당 코드를 추가하는게 좋음

    //input 으로 입력된 값을 오브젝트 안에 "value" 로 가져올 수 있음.
    const fn = firstName.value
    const ln = lastName.value
    const em = email.value
    const id = userid.value
    const diplaySpan = display.querySelector("span");
    // const displaySpan = display.getElementById("result")
    
    //innerHTML 을 통해 span 태그 내에 아래와 같이 새로운 내용을 작성할 수 있다.
    diplaySpan.innerHTML = `
    First Name is: ${fn}<br>
    Last Name is: ${ln}<br>
    E-mail is: ${em}<br>
    ID is: ${id}`;
};

//이벤트 발생에 대해 처리하는 함수.
//printForm 에 form 전체에 대해 user 라는 id를 통해 오브젝트를 저장해둠.
//해당 form에 이벤트 발생에 대한 콜백함수를 지정해두는 것.
//어떻게 발생한 이벤트에 대해 처리할지? : "submit" (마우스, 키보드 등등에 대해서도 설정할 수 있음.)
//"submit" 이벤트가 발생했을 경우, 어떤 행동을 취할지? : 콜백함수 handlePrint 지정
printForm.addEventListener("submit", handlePrint);

