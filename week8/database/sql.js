import mysql from "mysql2"; 

//데이터베이스 연결
const pool = mysql.createPool( //createPool() 함수를 통한 mysql 연결 설정
    process.env.JAWSDB_URL ?? {
        host: 'localhost', //host를 localhost로 설정 -> 웹 브라우저 상에서 localhost를 통해 접속 가능
        user: 'root', //mysql의 root로 연결
        database: 'week8', //week8 database 연결
        password: 'wldnjs12', // mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async/await 사용
const promisePool = pool.promise();

// select query
export const selectSql = { //selectSql object 정의 : select 명령어 관련 기능 수행
    getEmployee : async () =>{ //employee table의 Data를 받아오는 함수 
        //query() 함수의 인자로 employee table의 Data를 반환하는 명령어 전달
        //반환되는 employee table의 Data를 [rows] 에 저장한 후 rows를 return
        const [rows] = await promisePool.query(`select * from employee`); 
        console.log(rows)
        return rows
    },
    getDepartment : async () => { //department table의 Data를 받아오는 함수
        //query() 함수의 인자로 department table의 Data를 반환하는 명령어 전달
        //반환되는 department table의 Data를 [rows] 에 저장한 후 rows를 return
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
}

// insert query
export const insertSql = { //insertSql object 정의 : insert 명령어 관련 기능 수행
    setEmployee : async (data) => { //employee table에 Data를 insert 하는 함수. 인자로 입력된 데이터를 받아옴(data)
        //sql 변수에 사용자로부터 입력된 데이터 값을 employee table에 insert 하는 명령어 저장
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}", 
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;
        
        //query() 함수의 인자로 sql 전달 : 사용자로부터 입력된 데이터 값을 employee table에 insert.
        await promisePool.query(sql);
    },

    setDepartment : async (data) => {//department table에 Data를 insert 하는 함수. 인자로 입력된 데이터를 받아옴(data)
        //sql 변수에 사용자로부터 입력된 데이터 값을 department table에 insert 하는 명령어 저장
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;
        
        //query() 함수의 인자로 sql 전달 : 사용자로부터 입력된 데이터 값을 department table에 insert.
        await promisePool.query(sql);
    },
}

// update query
export const updateSql = { //updateSql object 정의 : update 명령어 관련 기능 수행
    updateEmployee : async (data) => {
        // where 조건을 만족하는 행에 대해서 salary 수정
        // where 조건으로 Ssn = "data.Ssn" 설정
        // query() 함수를 통해 명령어 전달

        const sql = `update employee set salary = ${data.Salary} where Ssn = "${data.Ssn}"`;
        await promisePool.query(sql);
    },
    updateDepartment : async (data) => {
        // where 조건을 만족하는 행에 대해서 dname 수정
        // where 조건으로 Dnumber = 1 설정
        // query() 함수를 통해 명령어 전달

        console.log("Dname!! : "+data.Dname);
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
        await promisePool.query(sql);
    },
}