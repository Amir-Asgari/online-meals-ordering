import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount',
                    type: 'number',
                    step: '1',
                    min: '1',
                    max: '5',
                    defaultValue: '1'
                }}
            />
            <button> + add</button>
            {!amountIsValid && <p style={{ color: "red" }}>please enter a valid number (1-5).</p>}
        </form>
    )
}

export default MealItemForm;