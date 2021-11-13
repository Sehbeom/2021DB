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


