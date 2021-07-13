import {unAuthorize} from "../../redux/LoginSlice";
import {ClientURL} from "../../enums/ClientURL";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const LogOut = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(unAuthorize());
        localStorage.setItem("Username", '');
        localStorage.setItem("Role", '');
        localStorage.setItem("Authorization", '');
        history.push(ClientURL.home);
    };

    return { handleLogout };
};

export default LogOut;