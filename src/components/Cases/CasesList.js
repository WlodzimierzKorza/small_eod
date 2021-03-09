import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import CasesRow from './CasesRow'

const CasesList = () => {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item variant="primary">
                <Row>
                    <Col md={2}>Nazwa</Col>
                    <Col md={2}>Instytucja</Col>
                    <Col md={4}>Komentarz</Col>
                    <Col md={1}>Utworzono</Col>
                    <Col md={1}>Zmodyfikowano</Col>
                    <Col md={1}>Tagi</Col>
                    <Col md={1}>Listy</Col>
                </Row>
            </ListGroup.Item>
            <CasesRow />
            <CasesRow />
            <CasesRow />
            <CasesRow />
            <CasesRow />
            <CasesRow />
        </ListGroup>
    )
}

export default CasesList
