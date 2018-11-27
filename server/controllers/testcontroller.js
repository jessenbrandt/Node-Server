var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

router.post('/one', (req, res) => {
    res.send("Test 1 went through!!")
})

router.post('/two', (req, res) => {
    let testData = "Test ddata for endpoint two";
    TestModel
    .create({
        testdata: testData
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
})

module.exports = router;