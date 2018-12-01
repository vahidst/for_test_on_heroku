

var express=require('express');
var router =express.Router();
var path = require('path');



router.get('/' , function(req, res){
    // res.render('nonlindqem1d');
    // res.render('nonlindqem1d');


    console.log("hello");
    req.post(path.join(__dirname +
           '/../Server_side/nonlindqem1d/serverside_solver'));

  }
);

       
  module.exports=router;