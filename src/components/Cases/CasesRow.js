import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import { createDate } from '../../helpers'

const CasesRow = ({ item }) => {
    return (
        <ListGroup.Item>
            <Row>
                <Col md={2}>
                    <a href="/#">{item.name}</a>
                </Col>
                <Col md={2}>{item.audited_institutions}</Col>
                <Col md={3}>{item.comment}</Col>
                {/* <Col md={1} className="text-center">
                    {createDate(item.createdOn)}
                </Col>
                <Col md={1} className="text-center">
                    {createDate(item.modifiedOn)}
                </Col> */}
                <Col md={2}>
                    {item.tags &&
                        item.tags.map((item) => {
                            return (
                                <a href="##" className="tag" key={item}>
                                    {item}
                                </a>
                            )
                        })}
                </Col>
                <Col className="text-center">{item.letterCount}</Col>
            </Row>
        </ListGroup.Item>
    )
}

export default CasesRow
