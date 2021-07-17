import './Logo.css';
import React from "react";
import {Link, useHistory} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import useFoldMenu from "../../hooks/useFoldMenu";

function Logo():JSX.Element {

    const history = useHistory();

    const handleHome = () => {
        history.push(ClientURL.home)
    }

    const { foldMenu, isFolded } = useFoldMenu();

    return (
        <div className="Logo">
            <h1 className="Home" onClick={() => {handleHome(); foldMenu(); } }>CMS</h1>
            {isFolded && <ul className="dropdown">
                <Link className="Link" to={ ClientURL.about } onClick={ foldMenu }>About</Link>
            </ul>}
        </div>
    );
}

export default Logo;