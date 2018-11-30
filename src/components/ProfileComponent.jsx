import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('profile' + this.props.userInfo);
    return (
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Hello {this.props.userInfo.name},</h1>
              <p>email: {this.props.userInfo.email}</p>
              <p>contact number: {this.props.userInfo.tel}</p>

            </div>
          </div>
        </div>
      </Jumbotron>
    );
  }
}


export default Profile;