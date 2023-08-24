import React from 'react'
import classes from './MealsSummary.module.css'

function MealsSummary(props) {
    return (
        <section className={classes.section}>
            <div className={classes.card}  >
                <h2>غذای خوشمزه تحویل شما</h2>
                <p>
                غذای مورد علاقه خود را از میان مجموعه گسترده غذاهای موجود ما انتخاب کنید
                     و از یک ناهار یا شام خوشمزه در خانه لذت ببرید.
                </p>
                <p>
                تمام وعده های غذایی ما با مواد اولیه مرغوب، به موقع و به موقع طبخ می شوند
                     البته توسط سرآشپزهای مجرب!
                </p>
            </div>
        </section>

    )
}

export default MealsSummary