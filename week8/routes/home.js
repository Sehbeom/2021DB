import express from "express";
import { insertSql, selectSql} from "../database/sql";

const router = express.Router();

router.get('/', (req,res)=>{ //'/' 경로로 get 요청이 들어왔을 경우에 대한 함수
    res.render('home'); // home.hbs 파일 rendering을 응답으로 전달
});

router.post('/', (req, res) => { //'/' 경로로 post 요청이 들어왔을 경우에 대한 함수
    //요청 내용으로 전달된 데이터의 수를 기준으로 행동 결정
    //4보다 큰 경우 : employee table에 insert : setEmployee(data)
    //4보다 작거나 같은 경우 : department table에 insert : setDepartment(data)
    //department table의 Attribute 수가 4이므로 4를 기준으로 결정

    const vars = req.body; //요청으로 전달된 데이터를 vars 변수에 저장
    const var_lenth = Object.keys(req.body).length; // Data 수 저장

    if(var_lenth > 4){//Data의 수가 4보다 클 경우
        const data = { //data object에 employee table 형식에 맞춰 Data 저장
            Fname: vars.fname,
            Minit: vars.minit,
            Lname : vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno : vars.dno
        };

        insertSql.setEmployee(data); //data object를 setEmployee() 함수의 인자로 전달
    } else{ //Data의 수가 4보다 작거나 같은 경우
        const data = { //data object에 department table 형식에 맞춰 Data 저장
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);//data object를 setDepartment() 함수의 인자로 전달
    }
    
    //위 행동을 모두 마친 후, '/' 경로로 redirect
    res.redirect('/');
})

module.exports = router;