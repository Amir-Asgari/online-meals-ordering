import React, { Fragment } from 'react'
import ReactDOM,{ createPortal } from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div onClick={props.onclose} className={classes.backdrop} />
}
const ModalOverlay = props => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    )
}
const portalElement = document.getElementById('overlays')
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onclose={props.onclose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal