const express = require('express');
const mysql = require('mysql'); // DB
const md5 = require('md5'); // for password encrypt

const router = express.Router(); // routes

// DB Create connection
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root1031',
  database: 'assignment'
});

// DB Connect
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('MySQL connected...')
});

// index
router.get('/', (req, res) => {
  // res.render('index');
  res.redirect('/home');
});

// get home
router.get('/home', (req, res) => {
  const acct = req.cookies.acct;
  if (acct) {
    res.redirect('/member');
  }
  else {
    res.render('home');
  }
});

// get member
router.get('/member', (req, res) => {
  const acct = req.cookies.acct;
  if (acct) {
    res.render('member', { acct });
  }
  else {
    res.redirect('/home');
  }
});

// post home
router.post('/home', (req, res) => {
	let acct = req.body.acct;
  let pswd = req.body.pswd;
  let actiontype = req.body.actiontype;
  let signInMsg; // for user on sign in action
  let signUpMsg; // for user on sign up action
  // Action type: login
  if (actiontype === 'isLogin'){
    console.log('Action type: login');
    if (acct && pswd) {
      // console.log('get input');
      let sql = `SELECT * FROM user WHERE email = '${acct}' AND password = '${md5(pswd)}'`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        // console.log(result);
        if(result.length >= 1) {
          res.cookie('acct', acct);
          res.redirect('/member');
        }
        else {
          // console.log('acct or password error');
          signInMsg = 'Sign In Error: Email/password error, please try again!';
          res.render('home', {signInMsg} );
        }
      });
    } 
    else {
      // console.log('input missing error');
      signInMsg = 'Sign In Error: Please type in your email and password!';
      res.render('home', {signInMsg} );
    }
  } // End of login
  // Action type: register
  else if (actiontype === 'isRegister'){
    console.log('Action type: register');
    if (acct && pswd) {
      // console.log('get input');
      let sql = `SELECT * FROM user WHERE email = '${acct}'`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        // console.log(result);
        if(result.length === 0) {
          let userInfo = {};
          userInfo['email'] = acct;
          userInfo['password'] = md5(pswd);
          // console.log(userInfo);
          let sqlInsert = 'INSERT INTO user SET ?';
          let queryInsert = db.query(sqlInsert, userInfo, (err, resultInsert) => {
            if(err) throw err;
            console.log(resultInsert);
            res.cookie('acct', acct);
            res.redirect('/member');
          });
        }
        else {
          // console.log('email already used');
          signUpMsg = 'Sign Up Error: Email has already been used, please try again!';
          res.render('home', {signUpMsg} );
        }
      });
      // signUpMsg = 'has info';
      // res.render('home', {signUpMsg} );
    } // End of register
    else {
      // console.log('input missing error');
      signUpMsg = 'Sign Up Error: Please type in your email and password!';
      res.render('home', {signUpMsg} );
    }    
  }
  else {
    // console.log('Action type: else');
    res.redirect('/home');
  }
});

// goodbye
router.post('/goodbye', (req, res) => {
  res.clearCookie('acct');
  res.redirect('/home');
});

module.exports = router;