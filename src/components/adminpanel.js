import React,{ inputRef, Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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

return(
<Form onSubmit={(event) => this.handleSubmit(event)}>
<Form.Group controlId="exampleForm.ControlSelect1">
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
    </Form.Control>
    <Form.Label>Confirmed</Form.Label>
        <Form.Control  type="text" placeholder="Confirmed" ref={this.confirmed}  />
        <Form.Label>Recovered</Form.Label>
        <Form.Control  type="text" placeholder="Recovered" ref={this.recovered} />
        <Form.Label>Deceased</Form.Label>
        <Form.Control  type="text" placeholder="Deceased" ref={this.deceased}/>
        <Button variant="primary" type="submit">
    Submit
  </Button>
</Form.Group>
 
  
</Form>


)


}}

export default AdminPanel;
