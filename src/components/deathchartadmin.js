import React,{ Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './mystyle.module.css';

class DeathChart extends Component{
  constructor() {
    super();
    /* 1. Initialize Ref */
    this.date = React.createRef(); 
    this.deaths=React.createRef(); 
    
 }

  

  handleSubmit(event) {
    event.preventDefault();
    const date = this.date.current.value;
    const deaths =this.deaths.current.value;
    console.log(date,deaths);
    const url = "http://localhost:8083/testuri";
    const data = { date:[date], totalDeaths:[deaths]}
fetch(url, { method: 'POST', // or ‘PUT’
body: JSON.stringify(data), // data can be `string` or {object}!
headers:{ 'Content-Type': 'application/json' } })
.then(res => res.json())
.catch(error => console.error('Error:',error))
.then(response => alert('Success'));
    
  }



render(){

return(<div className={styles.outerborder}><div className={styles.adminForm}>
<Form onSubmit={(event) => this.handleSubmit(event)} >
    <Form.Label>Date</Form.Label>
        <Form.Control  type="text" placeholder="Date" ref={this.date}  />
        <Form.Label>Total Deaths</Form.Label>
        <Form.Control  type="text" placeholder="deaths" ref={this.deaths} />
        <Form.Label>Deceased</Form.Label>
        <Button variant="primary" type="submit" >
    Submit
  </Button>
 </Form>
</div>
</div>

)


}}

export default DeathChart;
