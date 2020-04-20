import React, { Component } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

class RateOfIncreaseTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
      }

      componentDidMount() {
        fetch("https://trackcovid-19.herokuapp.com/fetchRateIncrease")
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
   return(<div>
    <h3>Last 5 Days Increase</h3>
<MDBTable responsive>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Increase</th>
          <th>Rate Of Increase</th>
          </tr>
      </MDBTableHead>
      <MDBTableBody>
      {items.map (item =>(<tr className="hoverable">
            <td key={item.num.key}>{item.num}</td>
          <td key={item.date.key}>{item.date}</td>
          <td key={item.change.key}>{item.change}</td>
          <td key={item.percentageChange.key}>{item.percentageChange}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable></div>
)

}


}

export default RateOfIncreaseTable;

