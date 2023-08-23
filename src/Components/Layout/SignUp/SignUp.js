import React, { useState } from 'react'
import Modal from '../../UI/Modal'

const SignUp = (props) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        iAccepted: false
    })

    const changeHandler = event => {
        if (event.target.name === "iAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
        console.log(data);
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("load");
    }

    return (
        <Modal onCloseCart={props.onCloseCart}>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name'>name</label>
                    <input type='text' id='name' name="name" value={data.name} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor='email'>email</label>
                    <input type='email' id='email' name="email" value={data.email} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input type='password' id='password' name="password" value={data.password} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor='confirmPassword'>confirmPassword</label>
                    <input type='password' id='confirmPassword' name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} />
                </div>
                <div>
                    <label >I accept terms of privacy policy</label>
                    <input type='checkbox' name="iAccepted" value={data.checkbox} onChange={changeHandler} />
                </div>
                <div>
                    <a href='#' >login</a>
                    <button  type='submit'> SignUp</button>
                </div>

            </form  >
        </Modal >
    )
}

export default SignUp