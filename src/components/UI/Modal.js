
import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';



const Backdrop = (props) => {
return(
<div onClick={props.onClose} className={classes.backdrop}></div>
    )
}


const Overlay = (props) => {
    return(
    <div className={classes.modal} >
        <div className={classes.content}>
        {props.children}
        </div>
    </div>
        );
    };
   

const overlayElement = document.getElementById('overlay');

const Modal = (props) => {
    return (
    <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, overlayElement)};
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlayElement)};   
    </React.Fragment>
    )
}

export default Modal;
