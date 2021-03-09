import React, { useState } from 'react'
import AddButton from '../components/AddButton/AddButton'
import CasesList from '../components/Cases/CasesList'
import CasesModal from '../components/Cases/CasesModal'

const CasesView = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <h2>Sprawy</h2>
            <CasesList />
            <CasesModal show={show} onHide={handleClose} />
            <AddButton method={handleShow} />
        </>
    )
}

export default CasesView
