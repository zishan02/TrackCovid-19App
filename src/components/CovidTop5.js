import React,{ Component } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

class CovidTop5 extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
      }
     
      componentDidMount() {
        fetch("https://trackcovid-19.herokuapp.com/fetchTop5")
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

    console.log(items);
return (<div>
    <h3>Top 5 States</h3>
    <MDBTable responsive>
    <MDBTableHead>
      <tr>
        <th>State</th>
       
        </tr>
    </MDBTableHead>
    <MDBTableBody>
    {items.map ((item) =>(<tr className="hoverable">

            <td key={item.stateName.key}>{item.stateName}</td>
          </tr>
        ))}
    </MDBTableBody>
  </MDBTable></div>

)

}

}
export default CovidTop5;