

var React= require('react');


class BC_eq extends React.Component {

    constructor(props){
        super(props);
        this.handleChange_B = this.handleChange_B.bind(this);
        this.handleChange_BC = this.handleChange_BC.bind(this);
    }

    handleChange_B(e){
        // console.log("Boundary number "+this.props.BC_eq_num+" is: "+e.target.value);
        this.props.get_state_B(this.props.BC_eq_num,e.target.value);
    }
    
    handleChange_BC(e){
        // console.log("BC number "+this.props.BC_eq_num+" is: "+e.target.value);
        this.props.get_state_BC(this.props.BC_eq_num,e.target.value);
    }
    


    render() {
        return (

            <div className="BC_eq_div">
                            
                <span>
                <label> BC {this.props.id} : @ </label>
                </span>
                <span className="Boundary_eq_span">
                <input type="text" name="Boundary_eq_text" 
                value={this.props.current_B || ""}
                className="Boundary_eq_inp" required="true"
                onChange={this.handleChange_B}
                // ref={(B_inp) => {this.B_el[this.key] = B_inp;}}
                />
                </span>

                <span>
                <label> The condition is : </label>
                </span>
                <span className="Condition_eq_span">
                <input type="text" name="Condition_eq_text" 
                value={this.props.current_BC || ""}
                className="Condition_eq_inp" required="true"
                onChange={this.handleChange_BC}
                //  ref={(BC_inp) => {this.BC_el[this.key] = BC_inp;}}
                 />
                </span>
                               
            </div>
        );
    }
}


class BC_vu extends React.Component {

    constructor(props){
        super(props);
        this.set_B_text=this.set_B_text.bind(this);
        this.set_BC_text=this.set_BC_text.bind(this);

    }
 
    set_B_text(i,text){
        this.props.get_data_from_B(i,text);
    }
    set_BC_text(i,text){
        this.props.get_data_from_BC(i,text);
    }

   

    render() {

        var number_of_BC_equation=this.props.num_of_BC_eq;
        var Arr_of_BC_index= Array.apply(null, {length: number_of_BC_equation})
                        .map(Function.call, Number);
        var list_of_BC_eq=Arr_of_BC_index.map((index) =>
         <BC_eq key={(index+1).toString()} 
                id={"No."+(index+1)}
                BC_eq_num={index}
                current_B={this.props.pass_B_eqs[index]}
                current_BC={this.props.pass_BC_eqs[index]}
                get_state_B={this.set_B_text}
                get_state_BC={this.set_BC_text}/>
            );

        if (number_of_BC_equation >0){
        return (

            <div className="BCs_div">
            {list_of_BC_eq}
            </div>
        );
        }else{return null}
    }
}





module.exports = BC_vu;

























