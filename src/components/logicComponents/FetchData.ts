import AxiosConfig from "../../axios/AxiosConfig";

const FetchData = async (link: string) => {

    const res = await AxiosConfig.get(link);
    return res.data;
}

export default FetchData;