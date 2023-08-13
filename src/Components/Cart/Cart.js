import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import Modal from './../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import CheckOut from './CheckOut'

const Cart = (props) => {
    const [isOrdering, setIsOrdering] = useState(false)

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        console.log(id);
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    };

    const submitOrderHandler = (userData) => {
        console.log(userData);
        fetch('https://react-http-23a17-default-rtdb.firebaseio.com/orders.json', {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
    }
    const cartItem = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    image={item.image}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    )

    const hideOrderButtonHandler = () => {
        setIsOrdering(true)
    }

    return (
        <Modal onCloseCart={props.onCloseCart}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {!hasItems && <h3 style={{ color: "red" }} >There is no item to order</h3>}
            {isOrdering && hasItems && <CheckOut onConfirm={submitOrderHandler} onCancel={props.onCloseCart} />}
            {!isOrdering && (
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                    {hasItems && <button className={classes.button} onClick={hideOrderButtonHandler}>Order</button>}
                </div>
            )}
        </Modal>
    )
}

export default Cart