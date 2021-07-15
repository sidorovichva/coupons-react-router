import './PopUpMessage.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../../redux/StoreConfig";

const PopUpMessage = (): JSX.Element => {

    const { responseStatus, responseMessage } = useSelector((state) =>
        ConfigureStore.getState().ResponseStatusSlice);

    return (
        <div className="PopUpMessage" style={{borderColor: responseStatus === 200 ? "green" : "red"}}>
            {responseMessage}
        </div>
    );
}

export default PopUpMessage;