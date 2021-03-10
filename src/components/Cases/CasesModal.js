import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/actions'
import { Modal, Col, Form, FormLabel, Button } from 'react-bootstrap'
import { Formik, Form as FormikForm } from 'formik'

const CasesModal = ({ onHide, show, addItem, state }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>Dodaj sprawę</Modal.Header>
            <Formik
                initialValues={{
                    id: '',
                    comment: '',
                    auditedInstitutions: [],
                    name: '',
                    responsibleUsers: [],
                    notifiedUsers: [29],
                    featureoptions: [1],
                    tags: [],
                    createdBy: 60,
                    modifiedBy: 1,
                    createdOn: '2020-10-04T03:38:36.783289Z',
                    modifiedOn: '2021-01-27T19:30:31.536731Z',
                    letterCount: 1,
                    noteCount: 0,
                }}
                validate={(values) => {
                    const errors = {}
                    if (values.name === '') {
                        errors.name = 'To pole nie moze być puste'
                    }
                    return errors
                }}
                onSubmit={(values, { resetForm, setFieldValue }) => {
                    addItem('cases', { ...values, id: new Date().getTime() })
                }}
            >
                {({ values, errors, handleChange, setFieldValue }) => {
                    return (
                        <FormikForm>
                            <Modal.Body>
                                <Form.Row>
                                    <Col>
                                        <Form.Group>
                                            <FormLabel>Nazwa sprawy</FormLabel>
                                            <Form.Control
                                                name="name"
                                                maxLength="100"
                                                onChange={handleChange}
                                                value={values.name}
                                                isInvalid={errors.name ? true : false}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <FormLabel>Kontrolowana instytucja</FormLabel>
                                            <Form.Control
                                                name="instytution"
                                                as="select"
                                                onChange={handleChange}
                                            ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row></Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group>
                                            <FormLabel>Komentarz</FormLabel>
                                            <Form.Control
                                                as="textarea"
                                                maxLength="1000"
                                                name="comment"
                                                onChange={handleChange}
                                                value={values.comment}
                                            ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group>
                                            <FormLabel>Czyja sprawa</FormLabel>
                                            <Form.Control
                                                as="select"
                                                onChange={handleChange}
                                                name=""
                                            >
                                                <option vlaue="client">Klient</option>
                                                <option value="sowp">SOWP</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <FormLabel>Odpowiedzialny za sprawę</FormLabel>
                                            <Form.Control as="select">{}</Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <FormLabel>Tagi</FormLabel>
                                            <Form.Control />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <FormLabel>Dodaj list</FormLabel>
                                            <Form.Control as="select"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="outline-primary" type="submit">
                                    Dodaj sprawę
                                </Button>
                            </Modal.Footer>
                        </FormikForm>
                    )
                }}
            </Formik>
        </Modal>
    )
}
const mapStateToProps = (state) => {
    return {
        state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (type, item) => {
            dispatch(addItem(type, item))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CasesModal)
