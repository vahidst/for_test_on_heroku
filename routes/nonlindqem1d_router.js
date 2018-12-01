

var express=require('express');
var router   =express.Router();
var path = require('path');


router.get('/' , function(req, res){
    // res.render('nonlindqem1d');
    // res.render('nonlindqem1d');

    res.sendFile(path.join(__dirname + '/../Client_side/nonlindqem1d.html'));

  }
);

       
  module.exports=router;