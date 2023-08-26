import React from 'react';
import Modal from '../Modal';
import classes from '../Modal.module.css'
import PopFries from '../../../Assets/PopFries.jpg'

const PopUp = (props) => {
    return (
        <Modal onCloseCart={props.onCloseCart}>
            <div className={classes.action} >
                <div className={classes.actions}>
                    <p>میان وعده جدید</p>
                    <button
                        className={classes["button--alt"]}
                        onClick={props.onCloseCart}
                    >
                        بستن
                    </button>
                </div>
                <img src={PopFries} />
            </div>
        </Modal>
    )
}

export default PopUp