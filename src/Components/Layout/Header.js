import { Fragment, useState } from 'react';
import mealsPic from './../../Assets/meals.jpg';
import classes from './../Layout/Header.module.css';
import CustomButton from './CustomButton';
import SignInButton from './SignInButton';
import SignUp from './SignUp/SignUp';


const Header = (props) => {
    const [showSignUp, setShowSignUp] = useState(false)

    const onShownSignIn = () => {
        setShowSignUp(!showSignUp)
    }

    const signUpShowHandler=()=>{
        setShowSignUp(false)
    }
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <SignInButton onShownSignIn={onShownSignIn} />
                {showSignUp && <SignUp onCloseCart={signUpShowHandler}/>}
                <CustomButton onShownCart={props.onShownCart} />
            </header>

            <div className={classes['main-image']}>
                <img src={mealsPic} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    )
}

export default Header