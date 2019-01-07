const express = require("express");
const router = express.Router();
const mysql = require('mysql')

// create mysql connection; then connect
const mysql_cred = require('../config/mysql-keys')
let mysql_connection = mysql.createConnection(mysql_cred)
mysql_connection.connect()

// route /api/user/
// get all users 
router.get('/', (req, res) => {
    let query = "select * from tbLogin_Users"
    mysql_connection.query(query, (err, rows, fields) => {
        if(err) throw err
        res.json(rows)
    });
});

// route /api/user/:uid
// get user by userid
router.get('/:uid', (req, res) => {
    let userID = req.params["uid"]
    let query = "select * from tbLogin_Users where UserID="+userID
    mysql_connection.query(query, (err, rows, fields) => {
        if(err) throw err
        res.json(rows)
    });
});

module.exports = router
