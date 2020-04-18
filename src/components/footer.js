import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {

    render() {
        return (

            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="10" >
                            <h5 className="title">Disclaimer</h5>
                            <p>
                                TrackCovid-19 is using government data to show up on its website and tries to update with accurate data. Dont rely completely on this data.
      </p>
                        </MDBCol>

                        {/*<MDBCol md="6">
                             <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
        </ul> 
        </MDBCol> */}
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/zishan02/TrackCovid-19App"> Open Source Git Hub Project </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        )


    }

}

export default Footer;