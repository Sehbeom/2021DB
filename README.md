# DATABASE 설계_11.13

## Week_2

### 1. 실행 방법

- 원하는 디렉토리 위치에 Repository clone

  ```bash
  // HTTPS
  git clone https://github.com/Sehbeom/2021DB.git
  
  // SSH
  git clone git@github.com:Sehbeom/2021DB.git
  ```

- VSCode 실행 -> week_2/hw/homework.html 실행

![image](https://user-images.githubusercontent.com/51029359/141638401-144a81dd-1235-4919-8460-ee2a1017bb1f.png)




### 2. 사용 방법

##### (1) Range Bar 설정

![image](https://user-images.githubusercontent.com/51029359/141638744-dcff9a0f-d3a4-4c85-95ac-cf21feae458b.png)


##### (2) 'Guess the number' input 숫자 입력

![image](https://user-images.githubusercontent.com/51029359/141638913-52e7e34b-7f13-4693-9ea2-2ed3c112a468.png)


##### (3) 'Play!'

- 0부터 Range Bar로 설정된 숫자 사이의 숫자 랜덤으로 출력
- 입력한 숫자>=출력된 숫자 : Win, 입력한 숫자<출력된 숫자 : Lose

![image](https://user-images.githubusercontent.com/51029359/141639068-932ea210-064e-451f-b847-1e4a10075ef8.png)


![image](https://user-images.githubusercontent.com/51029359/141639185-2280754f-f169-4423-af52-fdc5db817fda.png)


​	
## Week_3

### 1. 실행 방법

- 원하는 디렉토리 위치에 Repository clone

  ```bash
  // HTTPS
  git clone https://github.com/Sehbeom/2021DB.git
  
  // SSH
  git clone git@github.com:Sehbeom/2021DB.git
  ```

- week_3 디렉토리로 이동

  ```bash
  cd week_3
  ```

- express 설치 및 view 설정(hbs)

  ```bash
  npm install -g express-generator
  express --view=hbs .
  ```

- npm package 설치 후 실행

  ```bash
  npm install
  npm run start
  ```

- localhost 접속

  <blockquote>localhost:3000</blockquote>

- Student Table 생성 쿼리문

  ```mysql
  create table student(
      -> studentID int(8) NOT NULL,
      -> name char(5) not null,
      -> grade tinyint(1) not null,
      -> major varchar(20) not null,
      -> admissionDate date not null,
      -> email varchar(30) not null,
      -> primary key(studentID));
  ```

  


### 2. 실행 결과

![image](https://user-images.githubusercontent.com/51029359/141642221-99d545a2-b9ba-4f73-8b2a-f531c2b5c19f.png)

![image](https://user-images.githubusercontent.com/51029359/141642225-353baf2f-152b-4124-b9d0-f9c03da3702e.png)


- Database 내 Student Table의 Data 출력.


## Week8

### 1. 실행 방법

- 원하는 디렉토리 위치에 Repository clone

  ```bash
  // HTTPS
  git clone https://github.com/Sehbeom/2021DB.git
  
  // SSH
  git clone git@github.com:Sehbeom/2021DB.git
  ```

- week8 디렉토리로 이동

  ```bash
  cd week8
  ```

- npm package 설치 후 실행

  ```bash
  npm install
  npm run start
  ```

- localhost 접속

  <blockquote>localhost:3000</blockquote>

- MySQL 쿼리문

  - Employee Table

    ```mysql
    create table employee(
    	Fname varchar(10) not null,
        Minit char(1) null,
        Lname varchar(20) not null,
        Ssn char(9) not null,
        Bdate date null,
        Address varchar(30) null,
        Sex char(1) null,
        Salary decimal(5,0) null,
        Super_ssn char(9) null,
        Dno int not null,
        primary key(Ssn)
    );
    ```

  - Department Table

    ```mysql
    create table department(
    	Dname varchar(15) not null unique,
        Dnumber int not null,
        Mgr_ssn char(9) not null,
        Mgr_start_date date null,
        primary key(Dnumber)
    );
    ```

  - Contraints

    - FK : Employee(Dno) -> Department(Dnumber)

      ```mysql
      alter table employee add constraint Dno_Dnum foreign key(Dno) references department(Dnumber);
      ```

    - FK : Department(Mgr_ssn) -> Employee(Ssn)

      ```mysql
      alter table department add constraint Mgrssn_Ssn foreign key(Mgr_ssn) references employee(Ssn);
      ```



### 2. 사용 방법

#### (1) path : '/'

- Employee, Department Data 삽입

![image](https://user-images.githubusercontent.com/51029359/141642836-717408f3-bfa2-4ffe-a99a-71b7824e5602.png)


#### (2) path : '/select'

- Employee, Department Data 출력
![image](https://user-images.githubusercontent.com/51029359/141642850-67e9444e-1e68-4bef-8dfb-bb5c26bb8343.png)
![image](https://user-images.githubusercontent.com/51029359/141642855-d0225c4b-dec3-4627-8d10-69e386adc646.png)


#### (3) path : '/update'

- '/update/employee' : Employee Data 수정

![image](https://user-images.githubusercontent.com/51029359/141642875-e64c54db-4548-432b-a8ee-ba26fc7750e2.png)


- 'update/department' : Department Data 수정

![image](https://user-images.githubusercontent.com/51029359/141642883-a5559c30-25d0-4786-b844-05fa7959d2b5.png)


## Week10

### 1. 실행 방법

- 원하는 디렉토리 위치에 Repository clone

  ```bash
  // HTTPS
  git clone https://github.com/Sehbeom/2021DB.git
  
  // SSH
  git clone git@github.com:Sehbeom/2021DB.git
  ```

- week10 디렉토리로 이동

  ```bash
  cd week10
  ```

- npm package 설치 후 실행

  ```bash
  npm install
  npm run start
  ```

- localhost 접속

  <blockquote>localhost:3000</blockquote>

- MySQL 쿼리문

  - Department Table

    ```mysql
    create table department(
    	Dname varchar(15) not null unique,
        Dnumber int not null,
        primary key(Dnumber)
    );
    ```

  - Subject Table

    ```mysql
    create table subject(
    	subject_name varchar(30) not null,
        subject_id int not null,
        primary key(subject_id)
    );
    ```

  - User Table

    ```mysql
    create table user(
    	Id varchar(20) not null,
        Password varchar(20) not null,
        Role varchar(5) not null,
        primary key(Id)
    );
    ```



### 2. 사용 방법

#### (1) path : '/'

- User Table의 Id, Password Data를 토대로 로그인
- Id 가 'admin' 일 경우, 삭제 가능 페이지로 연결 : '/delete'
- Id 가 'admin'이 아닐 경우, Data 출력 페이지로 연결 '/select'

![image](https://user-images.githubusercontent.com/51029359/141643467-00da658f-ffc4-4702-806c-bd699702eec9.png)


#### (2) path : '/delete'

- admin 계정으로 로그인 시 접속 가능
- Data 삭제 가능

![image](https://user-images.githubusercontent.com/51029359/141643473-d67e3ebc-26a8-4ab2-942d-062a512ef86b.png)

#### (3) path : '/select'

- admin 계정이 아닌 계정으로 로그인 시 접속
- 단순 Data 출력 페이지

![image](https://user-images.githubusercontent.com/51029359/141643478-04763936-66d3-406a-a774-cc6b7b8a9ee9.png)

