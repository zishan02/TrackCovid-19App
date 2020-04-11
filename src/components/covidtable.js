import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import styles from './mystyle.module.css';
import LastestUpdates from './latestupdates';

class CovidTable extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://trackcovid-19.herokuapp.com/fetchTableData")
      .then(res => res.json())
      .then(
        (result) => {
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

  
  const {items} = this.state;

return (<div id="covidtable"><Table striped bordered hover className={styles.covidtable}>
    <thead>
      <tr>
        <th>States / UT</th>
        <th>Confirmed</th>
        <th>Recovered</th>
        <th>Death</th>
      </tr>
    </thead>
    <tbody>
      

        {items.map (item =>(<tr>
          <td key={item.stateName.key}>{item.stateName}</td>
          <td key={item.confirmedCases.key}>{item.confirmedCases}</td>
          <td key={item.recoveredCases.key}>{item.recoveredCases}</td>
          <td key={item.deceased.key}> {item.deceased}</td>
          </tr>
        ))}
         </tbody>
  </Table><LastestUpdates/></div>)

}}

export default CovidTable;