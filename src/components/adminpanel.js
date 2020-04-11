import React,{ Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './mystyle.module.css';

class AdminPanel extends Component{
  constructor() {
    super();
    /* 1. Initialize Ref */
    this.confirmed = React.createRef(); 
    this.recovered=React.createRef(); 
    this.deceased=React.createRef();
    this.state= React.createRef();
 }

  

  handleSubmit(event) {
    event.preventDefault();
    const confirmed = this.confirmed.current.value;
    const recovered =this.recovered.current.value;
    const deceased= this.deceased.current.value;
    const state= this.state.current.value;
    console.log(confirmed,recovered,deceased,state);
    const url = "https://trackcovid-19.herokuapp.com/AddState";
    const data = { stateName:state, confirmedCases:confirmed , recoveredCases:recovered,deceased:deceased}
fetch(url, { method: 'POST', // or ‘PUT’
body: JSON.stringify(data), // data can be `string` or {object}!
headers:{ 'Content-Type': 'application/json' } })
.then(res => res.json())
.catch(error => console.error('Error:',error))
.then(response => console.log('Success:', response));
    
  }



render(){

return(<div className={styles.outerborder}><div className={styles.adminForm}>
<Form onSubmit={(event) => this.handleSubmit(event)} >
<Form.Group controlId="exampleForm.ControlSelect1" >
    <Form.Label>States</Form.Label>
    <Form.Control as="select" ref={this.state}>
      <option>Jharkhand</option>
      <option>Bihar</option>
      <option>Uttar Pradesh</option>
      <option>Karnataka</option>
      <option>Tamil Nadu</option>
      <option>Maharashtra</option>
      <option>Kerala</option>
      <option>Madhya Pradesh</option>
      <option>Goa</option>
      <option>Odisha</option>
      <option>Andhra Pradesh</option>
      <option>Andaman and Nicobar Islands</option>
      <option>Arunachal Pradesh</option>
      <option>Assam</option>
      <option>Chandigarh</option>
      <option>Chhattisgarh</option>
      <option>Delhi</option>
      <option>Gujarat</option>
      <option>Haryana</option>
      <option>Himachal Pradesh</option>
      <option>Jammu and Kashmir</option>
      <option>Ladakh</option>
      <option>Manipur</option>
      <option>Mizoram	</option>
      <option>Puducherry</option>
      <option>Punjab</option>
      <option>Rajasthan</option>
      <option>Telengana</option>
      <option>Tripura</option>
      <option>Uttarakhand</option>
      <option>West Bengal</option>
    </Form.Control>
    <Form.Label>Confirmed</Form.Label>
        <Form.Control  type="text" placeholder="Confirmed" ref={this.confirmed}  />
        <Form.Label>Recovered</Form.Label>
        <Form.Control  type="text" placeholder="Recovered" ref={this.recovered} />
        <Form.Label>Deceased</Form.Label>
        <Form.Control  type="text" placeholder="Deceased" ref={this.deceased}/>
        <div className={styles.btnstyle}>
        <Button variant="primary" type="submit" >
    Submit
  </Button>
  </div>
</Form.Group>
 
  
</Form>
</div>
</div>

)


}}

export default AdminPanel;
