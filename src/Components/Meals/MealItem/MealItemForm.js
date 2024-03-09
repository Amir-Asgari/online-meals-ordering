import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import MealsRating from '../../UI/Rating/MealsRating';

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
                label='تعداد'
                input={{
                    id: 'amount',
                    type: 'number',
                    step: '1',
                    min: '1',
                    max: '5',
                    defaultValue: '1'
                }}
            />
            <button> +  افزودن </button>
            <div style={{ marginTop: "5px" }}>
                <MealsRating value={props.rating} />
            </div>
            {!amountIsValid && <p style={{ color: "red" }}>لطفا یک مقدار معتبر وارد کنید (1-5)</p>}
        </form>
    )
}

export default MealItemForm;