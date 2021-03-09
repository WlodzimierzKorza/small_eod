import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'

const CasesRow = () => {
    return (
        <ListGroup.Item>
            <Row>
                <Col md={2}>Kontrola zatrudnienia</Col>
                <Col md={2}>Urząd Miasta Leszna</Col>
                <Col md={4}>cos specjalnego</Col>
                <Col md={1}>22/02/2021</Col>
                <Col md={1}>24/02/2021</Col>
                <Col md={1}>tag 1, tag 2, tag 3</Col>
                <Col md={1}>5</Col>
            </Row>
        </ListGroup.Item>
    )
}

export default CasesRow
