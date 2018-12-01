var React = require('react');

class my_header extends React.Component {
  render() {
    return (
    
            <div id="my_header_div">

                <h1 > Welcome to NonlinDQEM App </h1>
                <p> This software tries to solve nonlinear differential equations
                    by differential quadrature finite element method.
                </p>


            </div>

    
    );
  }
}

module.exports = my_header ;