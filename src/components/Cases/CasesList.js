import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, Row, Col } from 'react-bootstrap'
import CasesRow from './CasesRow'

const CasesList = ({ state }) => {
    console.log(state)
    return (
        <ListGroup>
            <ListGroup.Item variant="primary">
                <Row className="font-weight-bold">
                    <Col md={2}>Nazwa</Col>
                    <Col md={2}>Instytucja</Col>
                    <Col md={3}>Komentarz</Col>
                    <Col md={1} className="text-center">
                        Utworzono
                    </Col>
                    <Col md={1} className="text-center">
                        Zmodyfikowano
                    </Col>
                    <Col md={2} className="text-center">
                        Tagi
                    </Col>
                    <Col md={1} className="text-center">
                        Listy
                    </Col>
                </Row>
            </ListGroup.Item>
            {state.cases.map((item) => {
                return <CasesRow key={item.id} item={item} />
            })}
        </ListGroup>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps, null)(CasesList)
