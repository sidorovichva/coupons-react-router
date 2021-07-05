import { useEffect} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {authorize} from "../redux/LoginSlice";
import {useHistory} from "react-router-dom";

const useLogin = (body: string) => {

    const index = 'https://coupons-back-mysql-jwt.herokuapp.com/login';
    //const index = 'http://localhost:8080/login';

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {

        const abort = new AbortController();

        if (body === '') return () => abort.abort();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        console.log("useLogin");
        console.log("body: " + body);

        axios.post(
            index,
            body,
            config
        )
            .then(res => {
                console.log("useLogin")
                if (res.status !== 200) {
                    throw Error("the data couldn't be fetched")
                }
                else if (res.data.Authorization !== null && res.data.Authorization.startsWith("Bearer ")) {

                    localStorage.setItem("Authorization", JSON.stringify(res.data.Authorization)
                        .slice(1, -1)
                        .replace(/\sUsername:[\w\d\W\D]+/, ''))

                    localStorage.setItem("Username", JSON.stringify(res.data.Authorization)
                        .slice(1, -1)
                        .replace(/Bearer\s[\S]+\sUsername:/, '')
                        .replace(/\sRole:\[ROLE_[\w]+]$/, ''))

                    localStorage.setItem("Role", JSON.stringify(res.data.Authorization)
                        .slice(1, -1)
                        .replace(/Bearer\s[\w\d\W\D]+\sRole:\[ROLE_/, '')
                        .replace(/]$/, ''))

                    dispatch(authorize({
                        emailValue: localStorage.getItem("Username"),
                        roleValue: localStorage.getItem("Role")
                    }))
                    //dispatch(resetLogin());
                    //dispatch(coupons())
                } else {
                    console.log("authorization failed")
                }
                //dispatch(reset())
                //dispatch(closeWindow());
                history.push('/');
                history.go(0)
            })

        return () => abort.abort();

    }, [body]);
}

export default useLogin;

// import { useEffect} from 'react';
// import axios from "axios";
// import {useDispatch, useSelector} from "react-redux";
// import ConfigureStore from "../redux/StoreConfig";
// import {closeWindow} from "../redux/PopUpWindowsSlicer";
// import {authorize} from "../redux/LoginSlice";
// import {coupons} from "../redux/MainScreenSlicer";
// import {reset} from "../redux/AxiosSlicer";
//
// const useLogin = () => {
//
//     const index = 'http://localhost:8080';
//
//     const { link, body } = useSelector((state) => ConfigureStore.getState().AxiosSlicer);
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         const abort = new AbortController();
//
//         if (link === '' && body === '') return () => abort.abort();
//
//         const token = localStorage.getItem("Authorization")
//         const config = {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }
//
//         console.log("useLogin");
//         console.log("url: " + index + link);
//         console.log("body: " + body);
//         console.log("headers: " + config)
//
//         axios.post(
//             index + link,
//             body,
//             config
//         )
//             .then(res => {
//                 if (res.status !== 200) {
//                     throw Error("the data couldn't be fetched")
//                 }
//                 else if (res.data.Authorization !== null && res.data.Authorization.startsWith("Bearer ")) {
//
//                     localStorage.setItem("Authorization", JSON.stringify(res.data.Authorization)
//                         .slice(1, -1)
//                         .replace(/\sUsername:[\w\d\W\D]+/, ''))
//
//                     localStorage.setItem("Username", JSON.stringify(res.data.Authorization)
//                         .slice(1, -1)
//                         .replace(/Bearer\s[\S]+\sUsername:/, '')
//                         .replace(/\sRole:\[ROLE_[\w]+]$/, ''))
//
//                     localStorage.setItem("Role", JSON.stringify(res.data.Authorization)
//                         .slice(1, -1)
//                         .replace(/Bearer\s[\w\d\W\D]+\sRole:\[ROLE_/, '')
//                         .replace(/]$/, ''))
//
//                     dispatch(authorize({
//                         emailValue: localStorage.getItem("Username"),
//                         roleValue: localStorage.getItem("Role")
//                     }))
//                     //dispatch(pushTheButton());
//                     dispatch(coupons())
//                 } else {
//                     console.log("authorization failed")
//                 }
//                 dispatch(reset())
//                 dispatch(closeWindow());
//             })
//
//         return () => abort.abort();
//
//     }, [link, body]);
// }
//
// export default useLogin;