import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import CasesRow from './CasesRow'

const CasesList = ({ cases, handleSort }) => {
    return (
        <ListGroup>
            <ListGroup.Item variant="primary">
                <Row className="font-weight-bold">
                    <Col
                        md={2}
                        onClick={() => {
                            handleSort('name')
                        }}
                    >
                        Nazwa
                    </Col>
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
            {cases.map((item) => {
                return <CasesRow key={item.id} item={item} />
            })}
        </ListGroup>
    )
}
export default CasesList
