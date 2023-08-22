import React from 'react'
import Modal from '../../UI/Modal'

const SignUp = (props) => {
    return (
        <Modal onCloseCart={props.onCloseCart}>
            <form >
                <div>
                    <label htmlFor='name'>name</label>
                    <input type='text' id='name' name="name" value={Data.name} />
                </div>
                <div>
                    <label htmlFor='email'>email</label>
                    <input type='email' id='email' name="email" value={Data.email} />
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input type='password' id='password' name="password" value={Data.password} />
                </div>
                <div>
                    <label htmlFor='confirmPassword'>confirmPassword</label>
                    <input type='password' id='confirmPassword' name="confirmPassword" value={Data.confirmPassword} />
                </div>
                <div>
                    <label >I accept terms of privacy policy</label>
                    <input type='checkbox' name="checkbox" value={Data.checkbox} />
                </div>
                <div>
                    <a href='#' >login</a>
                    <button type='submit'> SignUp</button>
                </div>

            </form>
        </Modal >
    )
}

export default SignUp