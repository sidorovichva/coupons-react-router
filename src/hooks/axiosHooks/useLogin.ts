import { useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authorize} from "../../redux/LoginSlice";
import {useHistory} from "react-router-dom";
import AxiosConfig from "../../axios/AxiosConfig";
import {ServerURL} from "../../enums/ServerURL";
import {setResponseStatus} from "../../redux/ResponseStatusSlice";
import ConfigureStore from "../../redux/StoreConfig";

const useLogin = (body: string) => {

    const { historyPushSuccess, historyPushFail } = useSelector((state) =>
        ConfigureStore.getState().HistoryPushSlice);

    const index = ServerURL.login;

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {

        AxiosConfig.post(
            index,
            body,
        )
            .then(response => {

                if (response.data.Authorization !== null && response.data.Authorization.startsWith("Bearer ")) {

                    localStorage.setItem("Authorization", JSON.stringify(response.data.Authorization).slice(1, -1))

                    localStorage.setItem("Username", JSON.parse(window.atob(response.data.Authorization.split('.')[1])).sub)

                    localStorage.setItem("Role", JSON.stringify(JSON.parse(window.atob(response.data.Authorization.split('.')[1])).authorities)
                        .slice(1, -1)
                        .replace(/[\w\d\W\D]+ROLE_/, '')
                        .replace(/"}$/, ''))

                    dispatch(authorize({
                        emailValue: localStorage.getItem("Username"),
                        roleValue: localStorage.getItem("Role")
                    }))
                    history.push(historyPushSuccess);
                    history.go(0);
                }
            })
            .catch((err) => {
                dispatch(setResponseStatus({
                    responseStatusValue: err.response.status,
                    responseMessageValue: "Login Failed",
                }));
                history.push(historyPushFail);
            })

    }, [body]);
}

export default useLogin;
