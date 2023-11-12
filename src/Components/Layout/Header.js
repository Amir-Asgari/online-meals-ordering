import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import mealsPic from './../../Assets/meals.jpg';
import classes from './../Layout/Header.module.css';
import style from '../../Components/Layout/Header/HiddenHeader.module.css'
import CustomButton from './CustomButton';
import SignInButton from './SignInButton';
import SignUp from './SignUp/SignUp';
import Button from '@mui/material/Button';


const Header = (props) => {
    const [showSignUp, setShowSignUp] = useState(false)

    const onShownSignIn = () => {
        setShowSignUp(!showSignUp)
    }

    const signUpShowHandler = () => {
        setShowSignUp(false)
    }


    return (
        <Fragment>
            <div style={{ backgroundColor: "#FFF", padding: "0.5rem" }}>
                <header className={classes.header}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/' >
                        <h1  > سایت سفارش غذا</h1>
                    </Link>
                    <SignInButton onShownSignIn={onShownSignIn} />
                    {showSignUp && <SignUp onCloseCart={signUpShowHandler} />}
                    <CustomButton onShownCart={props.onShownCart} />
                </header>
                <div className={style.header} >
                    <Button
                        style={{ backgroundColor: "#4d1601", borderRadius: 10, paddingTop: '10px', textDecoration: "none", marginRight: "10px" }}
                        variant="secondary"
                        component={Link}
                        to='/'
                    >
                        صفحه اصلی
                    </Button>
                    <Button
                        style={{ backgroundColor: "#4d1601", borderRadius: 10, paddingTop: '10px', textDecoration: "none", marginRight: "10px" }}
                        variant="secondary"
                        component={Link}
                        to='/aboutUs'
                    >
                        درباره ما
                    </Button>
                    <Button
                        style={{ backgroundColor: "#4d1601", borderRadius: 10, paddingTop: '10px', textDecoration: "none" }}
                        variant="secondary"
                        component={Link}
                        to='/Branches'
                    >
                        شعبه ها
                    </Button>
                </div>
            </div>

            <div className={classes['main-image']}>
                <img src={mealsPic} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    )
}

export default Header