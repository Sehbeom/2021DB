import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

// '/select' 경로로 들어오는 요청에 대한 행동을 정의
// '/select' 경로에 대한 설정은 src/index.js 에서 수행

// '/select' 경로로 get 요청이 들어왔을 때에 대한 함수
router.get('/', async function(req, res) { 
    //employee table과 department table의 Data를 받아온다.
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();

    res.render('select', { 
        // select.hbs 파일에 아래 key:value 데이터 전달 : object
        // select.hbs 파일 내에서는 value 데이터를 key의 형태로 활용할 수 있음.
        // employee와 department는 각각 object 형태이므로 그대로 전달.
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;