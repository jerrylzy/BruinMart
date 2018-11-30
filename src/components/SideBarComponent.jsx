import React from "react";
import { NavbarBrand, Nav, NavItem } from "reactstrap";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";
import Login from "./LoginComponent";
import { connect } from "react-redux";

function RenderSidebar(isLoggedin, username) {
  if (isLoggedin) {
    return (
      <div>
        <NavItem>
          <h4>{username}</h4>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/profile">
            <span className="fa fa-user fa-lg" /> My Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/posts">
            <span className="fa fa-stack-exchange fa-lg" /> My Posts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/saved">
            <span className="fa fa-heart-o fa-lg" /> Saved Items
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/ongoing">
            <span className="fa fa-exchange fa-lg" /> Ongoing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/sold">
            <span className="fa fa-shopping-bag fa-lg" /> Sold
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/settings">
            <span className="fa fa-cog fa-lg" /> Settings
          </NavLink>
        </NavItem>
      </div>
    );
  } else {
    return (
      <div>
        <NavItem>
          <NavLink className="nav-link" to="/profile">
            <h4>Please Log in</h4>
          </NavLink>
        </NavItem>
        <NavItem>
          <Login />
        </NavItem>
      </div>
    );
  }
}

const SideBar = props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Nav navbar onClick={props.toggleSideNav}>
        <NavbarBrand className="mr-auto col-2 col-sm-2">
          <Avatar size={50} src="assets/images/joe_bruin.jpg" round={true} />
        </NavbarBrand>
        {RenderSidebar(props.isLoggedin, props.username)}
      </Nav>
    </Menu>
  );
};

const mapStateToProps = state => ({
  username: state.users.username,
  password: state.users.password,
  isLoggedin: state.users.isLoggedIn
});

export default connect(
  mapStateToProps,
  {}
)(SideBar);
