var React = require('react');
var text_proc=require('../../public/javascripts/text_processor');

class equation_vu extends React.Component {

  constructor(props){
    super(props);
    this.state={
      eq_text  :"",
      eq_degree:"",
      x0       :"",
      xn       :"",
      n        :""
    };
    this.handleChange = this.handleChange.bind(this);
    this.on_solve     = this.on_solve.bind(this);
    this.on_x0_Change = this.on_x0_Change.bind(this);
    this.on_xn_Change = this.on_xn_Change.bind(this);
    this.on_n_Change  = this.on_n_Change.bind(this);
  }



  handleChange(event) {
    var new_degree= text_proc.get_eq_degree(event.target.value);
    this.setState({
      eq_text  : event.target.value,
      eq_degree: new_degree
    });
    this.props.get_eq_degree(new_degree);
     
  }

  on_x0_Change(event) {
    this.setState({
      x0  : event.target.value
    })     
  }
  
  on_xn_Change(event) {
    this.setState({
      xn  : event.target.value
    });     
  }
  
  on_n_Change(event) {
    this.setState({
      n  : event.target.value
    });     
  }


  on_solve(){
    this.props.get_eq_data(this.state);
  }




//   componentDidUpdate(){
//     console.log("new state is: eq_text= "+this.state.eq_text);
//     console.log("new state is: eq_degree= "+this.state.eq_degree);
//     console.log("new state is: x0= "+this.state.x0);
//     console.log("new state is: xn= "+this.state.xn);
//     console.log("new state is: n= "+this.state.n);
// }


  render() {




    return (
    
<div className="diff_eq_inps_div">

     
     <div className="diff_eq_div">
     <span>
        <label>Enter differential equation: </label>
     </span>
     <span className="diff_eq_span">
        <input type="text" name="eqation" id="diff_eq_inp"
         required="true" onChange={this.handleChange}/>
     </span>
     <span>
        <button onClick={this.on_solve}> RUN </button>
     </span>
     </div>

         <br/>

     <div className="interval_div">
      <label >from: </label>
         <input type="number" className="interval_inp" id="x0"
         onChange={this.on_x0_Change}/>
      <label >to: </label>
         <input type="number" className="interval_inp" id="xn"
         onChange={this.on_xn_Change}/>
      <label >number of mesh point: </label> 
         <input type="number" className="interval_inp" id="n"
         onChange={this.on_n_Change}/>
     </div>


</div>

    
    );
  }
}

module.exports = equation_vu ;