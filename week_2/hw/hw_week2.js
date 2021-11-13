const rangebar=document.getElementById("js-range"); //id 값을 통해 range input 정보를 가져온다.
const printmax=document.getElementById("maxnum"); //id 값을 통해 최대값을 표시할 span 정보를 가져온다.

const inputform=document.getElementById("js-guess")
const input=document.getElementById("numinput")

const choosednum=document.getElementById("choosednum");
const printresult=document.getElementById("printresult");


let maxnumber=0;

const PrintMaxNum = (e) => { //range input의 값이 change 되는 이벤트에 대한 콜백함수
    e.preventDefault(); //이벤트 발생에 대한 기본적인 기능을 막음. 
    maxnumber=rangebar.value; //maxnumber 변수에 range input 의 값 저장
    printmax.innerHTML = `${maxnumber}`;//maxnumber 값 span에 표시
};

const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Play = (e) => {
    e.preventDefault();
    let rannum=getRandomNum(0,maxnumber);
    choosednum.innerHTML = `You Choose: ${input.value}, the machin choose: ${rannum}`;
    printresult.innerHTML = rannum > input.value ? `You lost!` : `You win!`;
}

rangebar.addEventListener("change", PrintMaxNum);

inputform.addEventListener("submit",Play);