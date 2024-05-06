import React, { useReducer, useEffect, useRef, useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";
// import { db } from "./FireBase";
import { Query, collection } from "firebase/firestore";
// import firebase from "./firebase";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "UPDATE") {
    
    return {
      items: action.data.items,
      totalAmount: action.data.totalAmount,
    };
  }

  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // ایجاد شمارنده جدید اگر تا کنون وجود نداشته باشد
    const newIdCounter = state.idCounter || 0;

    // ایجاد شناسه جدید با استفاده از شمارنده
    const newItem = { ...action.item, id: newIdCounter.toString() };

    // بروزرسانی شمارنده برای استفاده در آیتم بعدی
    const updatedIdCounter = newIdCounter + 1;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [userName, setUserName] = useState("AmirAsgari");

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  useEffect(() => {
    fetchCartData();
  }, []);

  const idCounter = useRef(0); // ایجاد شمارنده با استفاده از useRef

  const fetchCartData = async (item, id) => {
    try {
      const newItem = { ...item, id: id };

      const response = await axios.get(
        `https://react-http-23a17-default-rtdb.firebaseio.com/orders/${userName}/orderedItems.json`
      );
      const responseData = response.data;
      let deletedItem = undefined;
      for (const userKey in responseData.orders) {
        for (const itemKey in responseData.orders[userKey].orderedItems) {
          console.log(responseData.orders[userKey].orderedItems);
          if (itemKey.startsWith("-")) {
            console.log('log');
            deletedItem = responseData.orders[userKey].orderedItems[itemKey];
            if (deletedItem) {
              delete responseData.orders[userKey].orderedItems[itemKey];
              console.log(`آیتم با آی دی ${itemKey} با موفقیت حذف شد.`);
            } else {
              console.log(`آیتم با آی دی ${itemKey} پیدا نشد.`);
            }
          }
        }
      }
      

      console.log(deletedItem);
      console.log(response.data);
      console.log(responseData);
      if (responseData.orderedItems) {
        dispatchCartAction({ type: "UPDATE", data: responseData });
      } else {
        console.log("داده‌های مورد نیاز برای بروزرسانی سبد خرید موجود نیست.");
      }

      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          responseData[key] = responseData[key];
        }
      }
    } catch (error) {
      console.log("خطا دریافت دیتا از سرور", error);
    }
  };
  const addItemToCartHandler = async (item) => {
    try {
      const newItem = { ...item };
      console.log(newItem);
      console.log(newItem.id);
      const response = await axios.post(
        `https://react-http-23a17-default-rtdb.firebaseio.com/orders/${userName}/orderedItems.json`,
        { ...newItem }
      );

      console.log("با موفقیت آیتم به سبد خرید اضافه شد:", response.data);
      dispatchCartAction({ type: "ADD", item: newItem });
      fetchCartData();
    } catch (error) {
      console.error("خطا در افزودن آیتم به سبد خرید:", error);
    }
  };

  const removeItemFromCartHandler = async (id) => {
    try {
      dispatchCartAction({ type: "REMOVE", id: id });
      const response = await axios.delete(
        `https://react-http-23a17-default-rtdb.firebaseio.com/orders/${userName}/orderedItems/${id}.json`
      );
      console.log("با موفقیت آیتم از سبد خرید حذف شد:", response.data);
      fetchCartData();
    } catch (error) {
      console.log("خطا در حذف ایتم خرید  ", error);
    }
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
