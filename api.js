const express = require('express');
const router = express.Router();
const myModel = require('./myModel.js')

const MyModel = new myModel();

router.post("/ledger/invoke", (req,res) => {
    let args = [req.body];
    console.log(args);
    let username = req.body.username;
    let userid = req.body.userid;
    let usersname = req.body.usersname;
    let amount = req.body.amount;

    MyModel.adduser(userid, username, usersname, amount).then((results) => {
        console.log(results);
        res.send(results);
    });

});

router.post("/ledger/binding", (req,res) => {
    let args = [req.body];
    console.log(args);
    let assetid = req.body.assetid;
    let assettype = req.body.assettype;
    let useridforasset = req.body.useridforasset;
    MyModel.addasset(assetid, assettype, useridforasset).then((results) => {
        console.log(results);
        res.send(results);
    });
});

router.post("/ledger/uqquery", (req,res) => {
    let args = [req.body];
    console.log(args);
    let uqid = req.body.uqid;
    console.log(uqid);
    MyModel.getuser(uqid).then((results) => {
        res.send(results);
    });
});

router.post("/ledger/aqquery", (req,res) => {
    let args = [req.body];
    console.log(args);
    let aqid = req.body.aqid;
    console.log(aqid);
    MyModel.getasset(aqid).then((results) => {
        res.send(results);
    });
});

router.post("/ledger/exchange", (req,res) => {
    let args = [req.body];
    console.log(args);
    let aouserid = req.body.aouserid;
    let buserid = req.body.buserid;
    let assetidforex = req.body.assetidforex;
    let camount = req.body.camount;

    MyModel.exchangeasset(aouserid, buserid, assetidforex, camount).then((results) => {
        console.log(results);
        res.send(results);
    });

});

router.post("/ledger/assethistory", (req,res) => {
    let args = [req.body];
    console.log(args);
    let assethisid = req.body.assethisid;
    console.log(assethisid);
    MyModel.getassethistory(assethisid).then((results) => {
        res.send(results);
    });
});

router.get('/',function(req,res){

    res.sendFile('index.html', { root: '.' })

});



module.exports = router;