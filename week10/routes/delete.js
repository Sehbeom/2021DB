import express from "express";
import {selectSql, deleteSql} from "../database/sql";

const router = express.Router();

// '/delete' 경로로 들어오는 요청에 대한 행동을 정의
// '/delete' 경로에 대한 설정은 src/index.js 에서 수행

// '/delete' 경로로 들어오는 get 요청에 대한 함수
router.get('/', async (req, res) => {
    //department 변수에 department table의 Data를 저장
    const department = await selectSql.getDepartment();
    const subject = await selectSql.getSubject();
    // delete.hbs 파일을 rendering 하며, 아래 Data 전달.
    // title key 값에 '삭제 가능' value 값 전달.
    // DB에 저장되어 있는 department Table Data 전달.
    res.render('delete', {
        title: "삭제 가능",
        department,
        subject
    });
});

// '/delete' 경로로 들어오는 post 요청에 대한 함수
router.post('/', async (req, res) => {
    console.log('delete router: ', req.body.delBtn);
    console.log('req.body : ', Object.keys(req.body));
    // 'data' 라는 이름의 object 변수 정의.
    // 'data' 변수에 Dnumber : req.body.delBtn 값 저장.
    // 'delete.hbs' 파일의 form에서 삭제 버튼의 name 값은 'delBtn'으로, value값은 'Dnumber'로 설정되어 있으므로
    // Dnumber 값을 delBtn의 이름으로 전달함.
    if(Object.keys(req.body)=='delBtn'){
        const data={
            Dnumber: req.body.delBtn,
        };

        // 위에서 정의된 data 변수를 delete 쿼리문을 정의하는 함수 deleteDepartment의 인자로 전달함.
        await deleteSql.deleteDepartment(data);
    }

    else if(Object.keys(req.body)=='delBtn2'){
        // const data={
        //     subject_id: req.body.delBtn2,
        // };

        const data={
            subject_name: req.body.delBtn2,
        };

        // 위에서 정의된 data 변수를 delete 쿼리문을 정의하는 함수 deleteDepartment의 인자로 전달함.
        await deleteSql.deleteSubject(data);
    }

    // 삭제 후, 다시 '/delete' 경로로 redirect
    res.redirect('/delete');
});

module.exports = router;