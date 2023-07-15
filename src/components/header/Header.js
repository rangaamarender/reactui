import React, { useState, useEffect } from "react";
import './Header.js';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineNotificationImportant, MdOutlineMail } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import DropDownHeaderProfile from "./DropDownHeaderProfile";
import { Col } from "react-bootstrap";

function Header({ title }) {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg" className="l-header">
        <Container>
          <h4 className="l-fs-21 l-fw-600 l-header-title">{title}</h4>
          <Form >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            // style={{ width: "160%" }}
            />
          </Form>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#notifications">
                  <MdOutlineNotificationImportant className="headerIcons" />
                </Nav.Link>
                <Nav.Link href="#messages">
                  <MdOutlineMail className="headerIcons" />
                </Nav.Link>
                <Nav.Link href="#settings">
                  <FiSettings className="headerIcons" />
                </Nav.Link>
                <Nav.Link href="#profile">
                  <CgProfile
                    className="headerIcons"
                  // onClick={() => setOpenProfile((prev) => !prev)}
                  ></CgProfile>
                  {/* {openProfile && <DropDownHeaderProfile />} */}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
