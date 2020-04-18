import React,{ Component } from 'react';

class CovidDetailsPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
          item: ""
        };
      }
    
      componentDidMount() {
        fetch("https://trackcovid-19.herokuapp.com/fetchCountCases")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                item: result
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
    const {item} = this.state;
return (
    <div id="panelbar">
      <div id="panelactive" >
<h4 className="panelboxactive hoverable">Total Active  : {item.totalActiveCases}</h4></div>
<div id="panelrecovered" >
<h4 className="panelboxrecovered hoverable">Total Recovered : {item.totalRecoveredCases}</h4></div>
<div id="paneldeceased" >
<h4 className="panelboxdeceased hoverable">Total Deceased : {item.totalDeceasedCases}</h4></div>
</div>
)


}


}

export default CovidDetailsPanel;