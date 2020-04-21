import React, { Component } from 'react';


class ExpectedOutcomes extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items:""
        };
      }

      componentDidMount() {
        fetch("https://trackcovid-19.herokuapp.com/fetchEstimatedCases")
          .then(res => res.json())
          .then(
              
            (result) => {
                console.log(result);
              this.setState({
                items: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                error
              });
            }
          )
       }
    

render(){

    const {items} =this.state;
return(
<h5 className="hoverable"><b>Estimated Confirmed Cases: </b><br/><b>{items.estimatedRecoveredWeek}</b> Cases in a Week<br/>
</h5>)

}



}

export default ExpectedOutcomes;

