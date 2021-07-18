import React from 'react';
import './Page404.css';
import Lottie from 'react-lottie';
import animationData from './../../assets/animation404.json';

const Page404 = (): JSX.Element => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="Page404" >
            <Lottie
                options={defaultOptions}
                //height={400}
                //width={400}
            />
        </div>
    );
}

export default Page404;