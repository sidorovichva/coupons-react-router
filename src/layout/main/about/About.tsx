import React from 'react';
import './About.css';
import schema from './../../../assets/schema.jpg';
import profile from './../../../assets/profile.jpg';

const About = (): JSX.Element => {

    return (
        <div className="About">
            {/*<h3>About the <a className="letter">C</a>oupon <a className="letter">M</a>anaging <a className="letter">S</a>ystem project:</h3>*/}
            <h3>About the Coupon Managing System project:</h3>
            <p>The project imitates platform for selling and buying coupons and consists of servlet MySQL server deployed on Heroku
                and a single-page web-site deployed on Netlify. Authentication implemented through JWT token.</p>
            <h4>Technologies used: </h4>
            <p>Java, TypeScript, CSS, HTML.</p>
            <p>Spring Boot, Spring JPA, Spring Web, Spring Security.</p>
            <p>React.js, Redux-Toolkit, React-Router, React-Query, Axios.</p>
            <h4>DB structure:</h4>
            <img src={ schema } alt="DB schema"/>

            <h3>About me:</h3>
            <div className="wrapper">
                <img className="profilePicture" src={ profile } alt="profile"/>
                <div className="picFont">
                    <a href="https://www.linkedin.com/in/vladimir-adam-sidorovich" target="_blank">LinkedIn</a>
                    <a href="https://github.com/sidorovichva" target="_blank">GitHub</a>
                    <a href="https://www.hackerrank.com/sidorovichva" target="_blank">HackerRank</a>
                </div>
            </div>

            <p></p>

        </div>
    );
}

export default About;