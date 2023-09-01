import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ padding: "0", textDecoration: "none" }}
          className="bg-[#ffffff] p-0 z-50 sticky top-0 border-b-4 border-green-600 "
        >
          <Container fluid>
            <Navbar.Brand
              href={"/"}
              className="flex items-center text-3xl drop-shadow-lg"
            >
              <img
                src={logo}
                width="90"
                height="90"
                className="d-inline-block align-top"
                alt="Logo"
              />
              <h1 className="-ml-4 -mb-2 text-green-700 font-semibold drop-shadow-sm">
                ay2agribusiness
              </h1>
            </Navbar.Brand>
            <Button
              onClick={handleShow}
              className="lg:invisible outline-none border-none text-gray-500 hover:bg-green-700"
            >
              <GiHamburgerMenu size={30} />
            </Button>
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="w-[50%]"
            >
              <Offcanvas.Header className="text-yellow-400 flex justify-center bg-green-800">
                <Offcanvas.Title className="font-bold capitalize font-serif">
                  way2agribusiness
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 text-md gap-2 drop-shadow-2xl font-[Poppins]">
                  <Nav.Link
                    href="#action1"
                    className="px-3 hover:px-3 hover:h-full  hover: hover:bg-green-900 hover:text-yellow-300 lg:hover:rounded-md sm:hover:rounded-full  rounded-full text-green-700 hover:duration-300"
                    onClick={handleClose}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    className="px-3 hover:px-3 hover:h-full  hover: hover:bg-green-900 hover:text-yellow-300 lg:hover:rounded-md sm:hover:rounded-full rounded-full text-green-700 hover:duration-300"
                    onClick={handleClose}
                  >
                    Our Services
                  </Nav.Link>
                  <Nav.Link
                    href="#action3"
                    className="px-3 hover:px-3 hover:h-full  hover: hover:bg-green-900 hover:text-yellow-300 lg:hover:rounded-md sm:hover:rounded-full rounded-full text-green-700 hover:duration-300"
                    onClick={handleClose}
                  >
                    Knowledge Center
                  </Nav.Link>
                  <Nav.Link
                    href="#action4"
                    className="px-3 hover:px-3 hover:h-full  hover: hover:bg-green-900 hover:text-yellow-300 lg:hover:rounded-md sm:hover:rounded-full rounded-full text-green-700 hover:duration-300"
                    onClick={handleClose}
                  >
                    Our Credentials
                  </Nav.Link>
                  <Nav.Link
                    href="#action5"
                    className="px-3 hover:px-3 hover:h-full  hover: hover:bg-green-900 hover:text-yellow-300 lg:hover:rounded-md sm:hover:rounded-full rounded-full text-green-700 hover:duration-300"
                    onClick={handleClose}
                  >
                    Career
                  </Nav.Link>
                  <Nav.Link
                    href="#action6"
                    className="px-3 hover:px-3 hover:h-full  hover: hover:bg-green-900 hover:text-yellow-300 lg:hover:rounded-md sm:hover:rounded-full rounded-full text-green-700 hover:duration-300"
                    onClick={handleClose}
                  >
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div>
        <Navbar className="bg-green-600 h-7 text-white flex gap-2 justify-end pr-5 text-md py-2 shadow-md">
          <span className="flex items-center gap-1">
            <span>
              <AiFillPhone size={24} />
            </span>{" "}
            9449004956
          </span>
          <span className="flex items-center gap-1">
            <span>
              <MdEmail size={24} />
            </span>
            way2agribusiness@gmail.com
          </span>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
