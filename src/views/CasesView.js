import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import AddButton from '../components/AddButton/AddButton'
import Heading from '../components/Heading/Heading'
import CasesList from '../components/Cases/CasesList'
import CasesModal from '../components/Cases/CasesModal'
import { Col, Row } from 'react-bootstrap'
import { sortArray, arrayStringFilter, arrayTagsFilter } from '../helpers'
import CasesFilterForm from '../components/Cases/CasesFilterForm'

const CasesView = ({ state }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [casesArray, setCasesArray] = useState([])
    const [order, setOrder] = useState(true)

    useEffect(() => {
        setCasesArray(sortArray(state.cases, 'id', false))
    }, [state.cases])

    const handleSort = (param) => {
        console.log(sortArray(casesArray, param, !order))
        setCasesArray(sortArray(casesArray, param, !order))
        setOrder(!order)
    }
    const handleChange = (e) => {
        setCasesArray(arrayStringFilter(state.cases, e.target.name, e.target.value))
    }
    const tagsHandleChange = (e) => {
        setCasesArray(arrayTagsFilter(state.cases, e.target.value))
    }
    return (
        <>
            <Heading>Sprawy</Heading>
            <Row>
                <Col md={3}>
                    <CasesFilterForm
                        handleChange={handleChange}
                        tagsHandleChange={tagsHandleChange}
                    />
                </Col>
                <Col md={9}>
                    <CasesList handleSort={handleSort} cases={casesArray} />
                </Col>
            </Row>

            <CasesModal show={show} onHide={handleClose} />
            <AddButton method={handleShow} />
        </>
    )
}
const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps, null)(CasesView)
