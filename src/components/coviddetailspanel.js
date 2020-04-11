import React,{ Component } from 'react';
import styles from './mystyle.module.css';

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
<h4 className={styles.detailspanel}>Total Active Cases : {item.totalActiveCases}</h4>
<h4 className={styles.detailspanel}>Total Recovered : {item.totalRecoveredCases}</h4>
<h4 className={styles.detailspanel}>Total Deceased : {item.totalDeceasedCases}</h4>
</div>
)


}


}

export default CovidDetailsPanel;