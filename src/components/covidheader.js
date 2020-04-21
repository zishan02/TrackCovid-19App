import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { Nav, Navbar} from "react-bootstrap";
import Form from 'react-bootstrap/Form';


class CovidHeader extends Component{

render(){return (
<Navbar bg="light" variant="light">
<Navbar.Brand href="/">TrackCovid-19</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="/" className="hoverable">Home</Nav.Link>
  <Nav.Link href="#" className="hoverable">Join Us</Nav.Link>
</Nav>
{/* <Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-primary">Search</Button>
</Form> */}
</Navbar>
     )}


}

export default CovidHeader;