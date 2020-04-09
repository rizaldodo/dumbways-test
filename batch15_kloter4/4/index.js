//use path module
const path = require('path');
//use express module 
const express = require('express');
//use hbs engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();

//konfigurasi koneksi
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dumb_socmed'
});

//connect ke db
conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql Connected...');
});

//set views file
app.set('views', path.join(__dirname, 'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
//set folder public sebagai static folder untuk static file
app.use('/assets', express.static(__dirname + '/public'));

//route untuk homepage
app.get('/', (req, res) => {
    let sql = "SELECT * FROM post_tb";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render('post_view', {
            results: results
        });
    });
});

//route untuk insert data
app.post('/save',(req, res) => {
    let data = {post_title: req.body.post_title, post_content: req.body.post_content};
    let sql = "INSERT INTO post_tb SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err) throw err;
        res.redirect('/');
    }); 
});

//route untuk update data
app.post('/update',(req, res) => {
    let sql = "UPDATE post_tb SET post_title='"+req.body.post_title+"', post_content'"+req.body.post_content+"' WHERE post_id="+req.body.post_id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
          res.redirect('/');
    });
});

//route untuk delete data
app.post('/delete', (req, res) => {
    let sql = "DELETE FROM post_tb WHERE post_id="+req.body.post_id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
          res.redirect('/');
    });
});

//server listening
app.listen(8000, () => {
    console.log('Server is running at port 8000');
});