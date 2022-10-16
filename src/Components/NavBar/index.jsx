import React from 'react'
import {Container,
    FormControl,
    Navbar,
    Nav,
    Dropdown,
    Badge} 
    from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom'


export default function NavBar() {
  return (
    <Navbar bg="light" variant="dark" style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/"> SunSet WINNER </Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl
                    style={{width:500}}
                    placeholder="Search a product..."
                    classNamr="m-auto"
                />
            </Navbar.Text>
            <Nav>
            <Dropdown alignRight>
                <Dropdown.Toggle variant="success">
                    <FaShoppingCart color="white" fontSize="25px" />
                    <Badge>{10}</Badge>
                </Dropdown.Toggle>

                 <Dropdown.Menu style={{ minWidth: 370 }}>
                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                </Dropdown.Menu>
            </Dropdown> 
            </Nav>
        </Container>
    </Navbar>
  )
}
