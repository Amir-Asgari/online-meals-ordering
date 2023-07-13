import React from 'react';
import classes from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <div className={classes.aboutUs}>
            <div className={classes["store-info"]}>
                <h2>Our locations</h2>
            </div>
            <div className={classes["map-container"]}>
                <iframe
                    id="map"
                    width="600"
                    height="450"
                    loading="lazy"
                    title='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6618090286083!2d51.332628084902055!3d35.699982658261334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe059dfbe24f%3A0x65caf772aaefc16d!2sDistrict%205%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran!5e1!3m2!1sen!2sus!4v1689196483801!5m2!1sen!2sus"
                >
                    map
                </iframe>
            </div>
        </div>
    )
}

export default AboutUs