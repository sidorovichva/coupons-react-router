import {useState} from "react";
import {ClientURL} from "../../enums/ClientURL";
import {Method} from "axios";
import useHistoryPush from "../../hooks/useHistoryPush";

const DeleteBean = (
    id: number,
    link: string,
    pushSuccess: ClientURL,
    pushFail: ClientURL
) => {

    useHistoryPush(pushSuccess, pushFail);

    const axiosDelete: Method = "DELETE";

    const [isToDelete, setIsToDelete] = useState<boolean>(false);
    const [deleteLink, setDeleteLink] = useState<string>('');

    const handleDelete = () => {
        setDeleteLink(link + '/' + id);
        setIsToDelete(true);
    }

    return {  handleDelete, isToDelete, deleteLink, axiosDelete };
}

export default DeleteBean;