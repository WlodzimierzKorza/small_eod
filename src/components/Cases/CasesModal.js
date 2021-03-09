import React from 'react'
import { Modal, Row, Col, Form, FormLabel } from 'react-bootstrap'
import { Formik, Form as FormikForm } from 'formik'

const CasesModal = ({ onHide, show }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>Dodaj sprawę</Modal.Header>
            <Modal.Body>
                <Formik>
                    {() => {
                        return (
                            <FormikForm>
                                <Form.Row>
                                    <Col>
                                        <FormLabel>Nazwa sprawy</FormLabel>
                                        <Form.Control name="name" maxLength="100" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <FormLabel>Kontrolowana instytucja</FormLabel>
                                        <Form.Control name="instytution" as="select" />
                                    </Col>
                                </Form.Row>
                            </FormikForm>
                        )
                    }}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default CasesModal
