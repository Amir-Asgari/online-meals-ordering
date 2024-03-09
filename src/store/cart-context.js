import axios from "axios";
import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 10,
    addItem: (item) => { },
    removeItem: (id) => { }
})

const CartContextProvider =(props)=>{
    const addItem = (item)=>{
        axios.post('https://react-http-23a17-default-rtdb.firebaseio.com/orders.json' , item) 
        .then(response=>{
            return response;
        }).catch(error=>{
            console.log('CartContextProvider', error);
        })
    }
}
export default CartContext