import React from 'react';
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import NavImage from "./nav-image"

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

	normalizePath(path) {
	  return path.replace(/\/+/g, `/`)
	}

	withPrefix(path) {
	  return this.normalizePath(`${__PATH_PREFIX__}/${path}`)
	}

  render() {
    return (
			<div>
        <Navbar color="dark" light expand="md" dark>
          <NavbarBrand href={this.withPrefix("/")}><NavImage /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Use of Force
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										<a href={this.withPrefix("/force-highlights")}>Highlights</a>
									</DropdownItem>
									<DropdownItem>
										<a href={this.withPrefix("/force")}>Full Analysis</a>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>

							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Complaints &amp; Misconduct
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										<a href={this.withPrefix("/complaints-highlights")}>Highlights</a>
									</DropdownItem>
									<DropdownItem>
										<a href={this.withPrefix("/complaints")}>Full Analysis</a>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>

							<NavItem>
                <NavLink href={this.withPrefix("/mediation")}>Mediation</NavLink>
              </NavItem>
							<NavItem>
                <NavLink href={this.withPrefix("/officers")}>Officer Demographics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://nolaipm.gov">OIPM Home</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
