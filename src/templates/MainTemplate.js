import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar/NavBar'

const MainTemplate = ({ children }) => {
    return (
        <>
            <NavBar />
            <Container fluid>{children}</Container>
        </>
    )
}

export default MainTemplate
