import express from "express";
import { selectSql} from "../database/sql";

const router = express.Router();

router.get('/', (req,res)=>{ //'/' 경로로 get 요청이 들어왔을 경우에 대한 함수
    res.render('login'); // login.hbs 파일 rendering을 응답으로 전달
});

router.post('/', async (req, res) => { //'/' 경로로 post 요청이 들어왔을 경우에 대한 함수
    const vars = req.body; //요청으로 전달된 데이터를 vars 변수에 저장. 사용자가 입력한 내용.
    const users = await selectSql.getUsers(); //DB에 있는 값을 받아와 users에 저장.
    // login을 시도한 계정 정보가 admin 인지 아닌지에 대해 판별하기 위한 변수 'whoAmI' 정의.
    let whoAmI = ''; //바꿀 수 있는 data type으로 let을 설정. const는 변경불가. 상수.
    let checkLogin = false; // login 조건 만족되었는지 여부를 파악하기 위한 변수.

    //map() : callback함수를 인자로 받음.
    //map()의 callback함수 : 전달된 인자에 저장된 값을 하나씩 확인하며 특정 기능을 수행하는 함수.
    //users에 저장되어 있는 Data를 하나씩 map() 함수의 인자로 전달. : user 에 담김.
    //각각의 Data(user)에 대해 id, pw 확인 후 checkLogin true로 설정 및 whoAmI 설정.
    //vars는 hbs파일로부터 전달받은 인자를 활용 : id, password. hbs파일에서 ID, PASSWORD로 보낼 경우, 이에 맞춰 활용.
    //user는 DB로부터 전달받은 Data 활용. SQL문에서 활용하는 Column과 동일한 형태로 활용.
    users.map((user)=>{ //map() 함수 활용
        console.log(user.Id);
        if(vars.id === user.Id && vars.password === user.Password) { //DB의 user Table에 입력된 id, pw값이 있는지 확인
            console.log('login success!');
            checkLogin = true; //조건문을 통과하면 checkLogin 변수 true로 변경.
            if(vars.id === 'admin'){ //입력된 id가 'admin'인지 판별
                whoAmI = 'admin'; //입력된 id가 'admin'일 경우, whoAmI 변수를 'admin'으로 설정
            }
            else {
                whoAmI = 'user'; //입력된 id가 'admin'이 아닐 경우, whoAmI 변수를 'user'로 설정
            }
        }
    })

    // 로그인 조건 만족했는지(checkLogin)판별 + whoAmI 변수에 저장되어 있는 값에 따라 redirect 경로 다르게 설정.
    // 'admin'일 경우, 삭제가 가능한 '/delete' 경로로 redirect
    // 'user'일 경우, Data 읽기만 가능한 '/select' 경로로 redirect
    // 로그인 조건 만족 못했을 경우, 알림창으로 로그인 실패 문장 출력 : alert()
    if (checkLogin && whoAmI === 'admin') {
        res.redirect('/delete');
    }
    else if (checkLogin && whoAmI === 'user') {
        res.redirect('/select');
    }
    else {
        console.log('login failed!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})

module.exports = router;