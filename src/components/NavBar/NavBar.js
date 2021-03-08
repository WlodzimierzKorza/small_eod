import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { routs } from '../../routs'
import './navbar.scss'

const NavBar = () => {
    const routsArray = Object.values(routs)
    console.log(routsArray)
    return (
        <>
            <Navbar bg="">
                <Navbar.Brand>
                    <img
                        width="auto"
                        height="40"
                        className="d-inline-block align-top"
                        src="https://siecobywatelska.pl//wp-content/uploads/2015/03/logo.png"
                        alt=""
                    />
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    {routsArray.map((item) => {
                        return (
                            <Nav.Item>
                                <Link to={item.path}>{item.name}</Link>
                            </Nav.Item>
                        )
                    })}
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar
