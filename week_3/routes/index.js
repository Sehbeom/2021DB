// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

import express from "express";
import sql from "../database/sql";
const router = express.Router();
router.get('/', async function(req, res, next) {
  const students = await sql.getStudents()
  console.log(students);
  res.render('users', {
    title: '사용자 목록',
    students
  });
});
module.exports = router;