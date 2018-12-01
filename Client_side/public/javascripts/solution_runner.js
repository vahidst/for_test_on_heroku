



var solution_handler={

get_equation_and_post: function(eq_data) {
  
    var eq        =eq_data.diff_eq_data.eq_text;
    var deg =eq_data.diff_eq_data.eq_degree;
    var x0        =eq_data.diff_eq_data.x0;
    var xn        =eq_data.diff_eq_data.xn;
    var n         =eq_data.diff_eq_data.n;
    var B_eqs     =eq_data.Boundary_eqs;
    var BC_eqs    =eq_data.Condition_eqs;

  
    console.log(eq);
    console.log(B_eqs);
    console.log(BC_eqs);


    var data2xhr={

        equation : eq,
        deg_of_eq: deg,
        x0       : x0,
        xn       : xn,
        n        : n ,
        Boundary_eqs  : B_eqs,
        Condition_eqs : BC_eqs
    };


    console.log(JSON.stringify(data2xhr));

    var xjhr = new XMLHttpRequest();
    var url = 'http://127.0.0.1:6400/serverside_solver';
    xjhr.open('POST', url, true);
    xjhr.setRequestHeader("Content-Type", "application/json");
    xjhr.onreadystatechange = function () { //Call a function when the state changes.
        if (xjhr.readyState == 4 && xjhr.status == 200) {


            var resp =JSON.parse(this.responseText);
            var eq             =resp.inp;
            var Boundary_eqs   =resp.Boundaries;
            var Condition_eqs  =resp.Conditions;
            // var Boundary_eqs  =Boundary_eqs.toString().replaceAll(",",", ");
            // var yy  =y.toString().replaceAll(",",", ");
            console.log(Boundary_eqs.toString());
            // console.log(yy);
            // document.getElementById('for_test').innerHTML=this.responseText;
            
            
            // document.getElementById('for_test').innerHTML=
            //     "<div> equation= ["+eq+"]</div>" +
            //     "<br><div> Boundary conditions = ["+BC2+"]</div>"+"<br>";




            //  var plot_loc=document.getElementById('plot_div');

            // Plotly.plot(plot_loc,[{x:x,y:y}],{margin:{t:0}});

            //return {x:x,y:y};










        }
    }
//
// // Neither was accepted when I set with parameters="username=myname"+"&password=mypass" as the server may not accept that
    xjhr.send(JSON.stringify(data2xhr));
//
//
}

}

module.exports= solution_handler;

