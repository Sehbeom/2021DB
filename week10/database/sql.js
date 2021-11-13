import mysql from "mysql2"; 

//데이터베이스 연결
const pool = mysql.createPool( //createPool() 함수를 통한 mysql 연결 설정
    process.env.JAWSDB_URL ?? {
        host: 'localhost', //host를 localhost로 설정 -> 웹 브라우저 상에서 localhost를 통해 접속 가능
        user: 'root', //mysql의 root로 연결
        database: 'week10', //week10 database 연결
        password: 'wldnjs12', // mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);


const promisePool = pool.promise();

// select query
export const selectSql = { //selectSql object 정의 : select 명령어 관련 기능 수행
    getUsers : async () =>{ //user table의 Data를 받아오는 함수 
        //query() 함수의 인자로 user table의 Data를 반환하는 명령어 전달
        //반환되는 user table의 Data를 [rows] 에 저장한 후 rows를 return
        const [rows] = await promisePool.query(`select * from user`); 
        console.log(rows)
        return rows
    },
    getDepartment : async () => { //department table의 Data를 받아오는 함수
        //query() 함수의 인자로 department table의 Data를 반환하는 명령어 전달
        //반환되는 department table의 Data를 [rows] 에 저장한 후 rows를 return
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
    getSubject : async () => {
        const [rows] = await promisePool.query(`select * from subject`);

        return rows
    }
}

export const deleteSql = { //delete 쿼리문 관련 설정.
    // Web 상에서 department Table의 Data를 delete하는 함수 'deleteDepartment' 정의
    // 인자로 data 전달받음. 
    // data 내에 저장되어 있는 Dnumber에 해당하는 값을 where 문의 조건으로 설정.
    // => data로 전달된 Dnumber에 해당하는 Data를 delete함.
    deleteDepartment : async(data)=>{
        console.log('deleteSql.deleteDepartment: ',data.Dnumber);
        const sql = `delete from department where Dnumber=${data.Dnumber}`;

        await promisePool.query(sql);
    },
    deleteSubject : async(data)=>{
        //const sql=`delete from subject where subject_id=${data.subject_id}`;
        const sql=`delete from subject where subject_name='${data.subject_name}'`;

        await promisePool.query(sql);
    }
}
