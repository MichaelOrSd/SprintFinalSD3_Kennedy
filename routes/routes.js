// routes page
const express = require('express');
const app = express();
const bst = require('../scripts/bst');

// databases
const BSTDal = require('../services/postgres.dal');

// main root route.
app.get('/', (req, res) => {
  res.render('index');
});

// home route.
app.get('/bst', (req, res) => {
  res.render('bst');
});

app.post('/bst', (req, res) => {
  res.render('bst');
});

// results route
app.get('/results', (req, res) => {
  let results = [];
  res.render('results', { results });
});

app.post('/results', async (req, res) => {
  let input = req.body.input;
  // test input for all nums
  // if (input != all nums ){render=bst{message.error{ "error" }}}
  let split = input.split(',');
  let results = split;
  let newArray = [];
  results.forEach((char) => {
    newArray.push(parseInt(char, 10));
  });

  let bstArray = await bst.testInput(newArray);
  // storing to db
  await BSTDal.addBST(input, bstArray);
  res.render('results', { bstArray });
});

// saved data route
app.get('/savedData', async (req, res) => {
  let totalData = await BSTDal.getBSTinfo();
  res.render('savedData', { totalData });
});

module.exports = app;
