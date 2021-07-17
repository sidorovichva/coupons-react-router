import AxiosConfig from "../../axios/AxiosConfig";

const FetchData = async (link: string) => {

    const res = await AxiosConfig.get(link);
    return res.data;
}

export default FetchData;

// import AxiosConfig from "../../axios/AxiosConfig";
// import {ServerURL} from "../../enums/ServerURL";
//
// const FetchData = async () => {
//
//     const res = await AxiosConfig.get(ServerURL.allCoupons);
//     return res.data;
//
// }
//
// export default FetchData;