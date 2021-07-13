import { useEffect} from 'react';
import {useDispatch} from "react-redux";
import {authorize} from "../../redux/LoginSlice";
import {useHistory} from "react-router-dom";
import AxiosConfig from "../../axios/AxiosConfig";
import {ServerURL} from "../../enums/ServerURL";
import {setResponseStatus} from "../../redux/ResponseStatusSlice";

const useLogin = (body: string) => {

    const index = ServerURL.login;

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {

        AxiosConfig.post(
            index,
            body,
        )
            .then(response => {

                console.log("1")
                console.log(response.status)
                console.log(response.data)

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
                    history.push(ServerURL.allCoupons);
                    history.go(0);
                }
            })
            .catch((err) => {

                console.log("3")

                dispatch(setResponseStatus({
                    responseStatusValue: err.response.status,
                    responseMessageValue: "Login Failed",
                }));

            })

    }, [body]);
}

export default useLogin;

// import { useEffect} from 'react';
// import {useDispatch} from "react-redux";
// import {authorize} from "../../redux/LoginSlice";
// import {useHistory} from "react-router-dom";
// import AxiosConfig from "../../axios/AxiosConfig";
// import {ServerURL} from "../../enums/ServerURL";
// import {setResponseStatus} from "../../redux/ResponseStatusSlice";
//
// const useLogin = (body: string) => {
//
//     const index = ServerURL.login;
//
//     const history = useHistory();
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//
//         const abort = new AbortController();
//
//         if (body === '') return () => abort.abort();
//
//         AxiosConfig.post(
//             index,
//             body,
//         )
//             .then(res => {
//                 if (res.status !== 200) {
//                     throw Error("the data couldn't be fetched")
//                 }
//                 else if (res.data.Authorization !== null && res.data.Authorization.startsWith("Bearer ")) {
//
//                     localStorage.setItem("Authorization", JSON.stringify(res.data.Authorization).slice(1, -1))
//
//                     localStorage.setItem("Username", JSON.parse(window.atob(res.data.Authorization.split('.')[1])).sub)
//
//                     localStorage.setItem("Role", JSON.stringify(JSON.parse(window.atob(res.data.Authorization.split('.')[1])).authorities)
//                         .slice(1, -1)
//                         .replace(/[\w\d\W\D]+ROLE_/, '')
//                         .replace(/"}$/, ''))
//
//                     dispatch(authorize({
//                         emailValue: localStorage.getItem("Username"),
//                         roleValue: localStorage.getItem("Role")
//                     }))
//                 } else {
//                     console.log("authorization failed")
//                 }
//                 history.push(ServerURL.allCoupons);
//                 history.go(0);
//             })
//             .catch((err) => {
//                 if (err.response.data) {
//
//                     console.log(err.response.status)
//                     console.log(err.response.data)
//
//                     dispatch(setResponseStatus({
//                         responseStatusValue: err.response.status,
//                         responseMessageValue: JSON.stringify(err.response.data),
//                     }));
//                 }
//
//             })
//
//         return () => abort.abort();
//
//     }, [body]);
// }
//
// export default useLogin;
