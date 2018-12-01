

var React        = require('react');
var ReactDOM     = require('react-dom');
// var createReactClass = require('create-react-class');
// Html_root      =require('./views/html_vu/html_root');
var My_header  = require('./views/view_components/my_header');
var Equation_vu  = require('./views/view_components/equation_vu');
var BC_vu  = require('./views/view_components/BC_vu');

var solver=require('./public/javascripts/solution_runner');




class Nonlindqem1d extends React.Component{

// var nonlindq1d=createReactClass({


    constructor(props){
        super(props);

        this.state={
            eq_degree :"",
            Boundary_eqs:[],
            Condition_eqs:[]
            }
        this.set_degree=this.set_degree.bind(this);
        this.set_B_data=this.set_B_data.bind(this);
        this.set_BC_data=this.set_BC_data.bind(this);
        this.send_data_to_solver=this.send_data_to_solver.bind(this);

    }


set_degree(degree){
    this.setState({
      eq_degree: degree
    });
    console.log("degree_getter is done. new degree is "+degree);
}


set_B_data(i,text){
    // console.log("i="+i+"; and type of i is: "+(typeof i));
    // console.log("text="+text+"; and type of text is: "+(typeof text)); 
    var B_eqs=this.state.Boundary_eqs;
    B_eqs[i]=text;
    this.setState({
        Boundary_eqs : B_eqs
    });

}

   set_BC_data(i,text){
    // console.log("i="+i+"; and type of i is: "+(typeof i));
    // console.log("text="+text+"; and type of text is: "+(typeof text)); 
    var C_eqs=this.state.Condition_eqs;
    C_eqs[i]=text;
    this.setState({
        Condition_eqs : C_eqs
    });
 
}




send_data_to_solver(diff_equation_data){  

    var deg= diff_equation_data.eq_degree;
    var Arr_B_eqs = this.state.Boundary_eqs;
    var Arr_BC_eqs = this.state.Condition_eqs;
    Arr_B_eqs.splice(deg);
    Arr_BC_eqs.splice(deg);
    
    var eq_data={
        diff_eq_data      : diff_equation_data,
        Boundary_eqs      : Arr_B_eqs,
        Condition_eqs     : Arr_BC_eqs
    }
    // console.log(eq_data);
    solver.get_equation_and_post(eq_data);
}





    render() {

        // console.log("Bondary eqs= "+this.state.Boundary_eqs);
        // console.log("Condition eqs= "+this.state.Condition_eqs);
   

        return (

                <div>
                    <My_header/>
                    <br/>
                    <Equation_vu get_eq_degree={this.set_degree} 
                                 get_eq_data={this.send_data_to_solver}/>
                    <br/>
                    <BC_vu num_of_BC_eq={this.state.eq_degree}
                            get_data_from_B={this.set_B_data}
                            get_data_from_BC={this.set_BC_data}
                            pass_B_eqs={this.state.Boundary_eqs}
                            pass_BC_eqs={this.state.Condition_eqs}
                            />

                </div>               

        );

    }

}

ReactDOM.render(<Nonlindqem1d/>,document.getElementById("main_entry_point"));



 module.exports = Nonlindqem1d; 
