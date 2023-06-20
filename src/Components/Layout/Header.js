import { Fragment } from 'react';
import mealsPic from './../../Assets/meals.jpg';
import classes from './../Layout/Header.module.css';
import CustomButton from './CustomButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CustomButton onShowModal={props.onShowModal} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsPic} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    )
}

export default Header