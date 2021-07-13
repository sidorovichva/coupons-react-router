import './Logo.css';
import React from "react";
import {Link, useHistory} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";

function Logo():JSX.Element {

    const history = useHistory();

    const handleHome = () => {
        history.push(ClientURL.home)
    }

    return (
        <div className="Logo">
            <h1 className="Home" onClick={ handleHome }>CMS</h1>
            <ul className="dropdown">
                <Link className="Link" to={ ClientURL.about } >About</Link>
            </ul>
        </div>
    );
}

export default Logo;