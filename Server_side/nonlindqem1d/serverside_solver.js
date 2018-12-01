

var express = require('express');
var router  = express.Router();

var math    = require('mathjs');


/* response to plotter-eq request. */
router.post('/', function(req, res) {



    // console.log("hello");
    // console.log(req);
    console.log(req.body);
    var equation = req.body.equation;
    var x0       = eval(req.body.x0);
    var xn       = eval(req.body.xn);
    var  n       = eval(req.body.n);
    var B_eqs    = req.body.Boundary_eqs;
    var BC_eqs   = req.body.Condition_eqs;
    console.log(equation);
    console.log(B_eqs);
    console.log(BC_eqs);
    // // console.log((xn-x0)/n);

    // var x=linspace(x0,xn,n);

    //
    // var parser =math.parser();
    // parser.eval(equation);
    // var func   =parser.get('f');
    // var y      = func(x);


    //console.log(x);
    // console.log(y);
    // console.log(typeof x);




    // res.send(x.toString()+"<br>"+"be aware"+"<br>"+y.toString());
    res.send(JSON.stringify({
        "inp":equation,
        "Boundaries":B_eqs,
        "Conditions":BC_eqs
    }));



});


function linspace (x0,xn,n) {

    var dx=(xn-x0)/(n-1);
    var x=[x0];

    for (i=1; i<n; i++){
        x[i]=x[i-1]+dx;
    }

    return x;

}


module.exports = router;







