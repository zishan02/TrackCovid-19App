import React, { Component } from 'react';

class LastUpdated extends Component{
    constructor(props) {
        super(props);
        this.state = {
          lastupdated: "00 :00"
        };
      }
    
      componentDidMount() {
        fetch("https://trackcovid-19.herokuapp.com/fetchLastUpdate")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                lastupdated: result
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
const {lastupdated}=this.state;
console.log({lastupdated});
return (<div><h6 > Last Updated :{lastupdated.date}</h6>
      <h6>{lastupdated.timeDiffText}</h6></div>)

    }}

export default LastUpdated;