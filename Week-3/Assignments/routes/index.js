const express = require('express');
const router = express.Router();

const numberSum = require('../numberSum.js');

// index
router.get('/', (req, res) => {
  res.render('index');
});

// getData
router.get('/getData', (req, res) => {
  let reqQs = req.query; // get query string
  let result;
  if (Object.keys(reqQs).length === 0) {
    result = 'Lack of Parameter';
  }
  else {
    let number = Number(reqQs.number);
    // console.log(number);
    if (Number.isNaN(number) || number <= 0 || !Number.isInteger(number)) {
      result = 'Wrong Parameter';
    }
    // positive integer
    else {
      result = numberSum.getNumberSum(number); // positive integer
    }
  }
  res.render('getData', {result} );
});

// trackName & myName
router.get('/myName', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.render('myName', { name });
  }
  else {
    res.redirect('/trackName');
  }
});

router.get('/trackName', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.redirect('/myName');
  }
  else {
    res.render('trackName');
  }
});

router.post('/trackName', (req, res) => { 
  res.cookie('name', req.body.name);
  res.redirect('/myName');
});

// goodbye
router.post('/goodbye', (req, res) => {
  res.clearCookie('name');
  res.redirect('/trackName');
});

module.exports = router;