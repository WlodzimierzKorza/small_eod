import React from 'react'
import { Card, Form } from 'react-bootstrap'

const CasesFilterForm = ({ handleChange, tagsHandleChange }) => {
    return (
        <Card>
            <Card.Header>Filtruj sprawy</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Nazwa sprawy</Form.Label>
                        <Form.Control name="name" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Komentarz</Form.Label>
                        <Form.Control name="comment" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tag</Form.Label>
                        <Form.Control name="tags" onChange={tagsHandleChange} />
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CasesFilterForm
