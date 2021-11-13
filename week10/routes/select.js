import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

// '/select' 경로로 들어오는 요청에 대한 행동을 정의
// '/select' 경로에 대한 설정은 src/index.js 에서 수행

// '/select' 경로로 get 요청이 들어왔을 때에 대한 함수
// department의 Data를 select.hbs 파일로 전달.
router.get('/', async function(req, res) { 
    //employee table과 department table의 Data를 받아온다.
    const department = await selectSql.getDepartment();
    const subject = await selectSql.getSubject();

    res.render('select', {
        // select.hbs 파일에 아래 key:value 데이터 전달 : object
        // select.hbs 파일 내에서는 value 데이터를 key의 형태로 활용할 수 있음.
        // title key값에 'ID 공대' value값 전달.
        // department는 object 형태이므로 그대로 전달.
        title1: 'IT 공대',
        title2: '과목',
        department,
        subject
    });
});

module.exports = router;