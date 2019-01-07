const express = require('express')
const router = express()
const port = process.env.PORT || 4200
const mysql = require('mysql')

const mysqlKeys = require('./config/mysql-keys')

router.use((req, res, next) => {
    res.locals.connection = mysql.createConnection({...mysqlKeys})
    res.locals.connect()
    next()
});

router.get('/', (req, res) => {
    res.locals.connection.query('select * from tbLogin_Users', 
    (error, result) => {
        if(error) throw error
       console.log(JSON.stringify({"status": 200, "error": null, "response": result}));
    });
});

router.listen(port, () => {
    console.log("listening on port:" + port)
});