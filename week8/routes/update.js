import express from "express";
import {selectSql, updateSql} from "../database/sql";

const router = express.Router();

// '/update' 경로로 들어오는 요청에 대한 행동을 정의
// '/update' 경로에 대한 설정은 src/index.js 에서 수행

// '/update/employee' 경로로 들어오는 get 요청에 대한 함수
router.get('/employee', async (req, res) => {
    //emp_res 변수에 employee table의 Data를 저장
    const emp_res = await selectSql.getEmployee();
    //updateEmployee.hbs 파일에 아래 key:value 데이터 전달 : object
    //updateemployee.hbs 파일에서는 value에 해당하는 데이터를 key로 활용할 수 있음
    //emp_res는 object 형식이므로 그대로 전달.
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });
});

// '/update/department' 경로로 들어오는 get 요청에 대한 함수
router.get('/department', async (req, res) => {
    //dept_res 변수에 department table의 Data를 저장
    const dept_res = await selectSql.getDepartment();
    //updateDepartment.hbs 파일에 아래 key:value 데이터 전달 : object
    //updateDepartment.hbs 파일에서는 value에 해당하는 데이터를 key로 활용할 수 있음
    //dept_res는 object 형식이므로 그대로 전달.
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    });
});

// '/update/employee' 경로로 들어오는 post 요청에 대한 함수
router.post('/employee', async(req, res) => {
    // 수정된 Data를 vars에 저장
    const vars = req.body;
    console.log(vars.salary);

    // 수정된 Data 내용을 object 형식으로 저장
    const data={
        Salary : vars.salary,
        Ssn : vars.ssn
    }
    // data 변수를 updateEmployee() 함수의 인자로 전달
    await updateSql.updateEmployee(data);

    // '/select' 경로로 redirect
    res.redirect('/select');
});

// '/update/department' 경로로 들어오는 post 요청에 대한 함수
router.post('/department', async(req,res) => {
    // 수정된 Data를 vars에 저장
    const vars = req.body;
    console.log(vars.dname);

    // 수정된 Data 내용을 object 형식으로 저장
    const data={
        Dname : vars.dname
    }
    // data 변수를 updateDepartment() 함수의 인자로 전달
    await updateSql.updateDepartment(data);

    // '/select' 경로로 redirect
    res.redirect('/select');
});

module.exports = router;