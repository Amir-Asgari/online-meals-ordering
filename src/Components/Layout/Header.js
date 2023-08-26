import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import mealsPic from './../../Assets/meals.jpg';
import classes from './../Layout/Header.module.css';
import CustomButton from './CustomButton';
import SignInButton from './SignInButton';
import SignUp from './SignUp/SignUp';
import style from '../../Components/Layout/Header/HiddenHeader.module.css'
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
            <header className={classes.header}>
                <h1> سایت سفارش غذا</h1>
                <SignInButton onShownSignIn={onShownSignIn} />
                {showSignUp && <SignUp onCloseCart={signUpShowHandler} />}
                <div className={style.header}>
                    <Button
                        style={{ backgroundColor: "#4d1601", borderRadius: 30, padding: 10, textDecoration: "none" }}
                        variant="secondary"
                        component={Link}
                        to='/'
                    >
                        اصلی
                    </Button>
                    <Button
                        style={{ backgroundColor: "#4d1601", borderRadius: 30, padding: 10, textDecoration: "none" }}
                        variant="secondary"
                        component={Link}
                        to='/aboutUs'
                    >
                        درباره ما
                    </Button>
                    <Button
                        style={{ backgroundColor: "#4d1601", borderRadius: 30, padding: 10, textDecoration: "none" }}
                        variant="secondary"
                        component={Link}
                        to='/Branches'
                    >
                        شعبه ها
                    </Button>
                </div>
                <CustomButton onShownCart={props.onShownCart} />
            </header>

            <div className={classes['main-image']}>
                <img src={mealsPic} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    )
}

export default Header