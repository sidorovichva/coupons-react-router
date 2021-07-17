import {useState} from "react";
import {ClientURL} from "../../enums/ClientURL";
import {Method} from "axios";
import useHistoryPush from "../../hooks/useHistoryPush";
import useUniqueIndex from "../../hooks/useUniqueIndex";

const DeleteBean = (
    id: number,
    link: string,
    pushSuccess: ClientURL,
    pushFail: ClientURL
) => {

    useHistoryPush(pushSuccess, pushFail);

    const { randomGenerator } = useUniqueIndex();

    const axiosDelete: Method = "DELETE";

    const [isToDelete, setIsToDelete] = useState<boolean>(false);
    const [deleteLink, setDeleteLink] = useState<string>('');

    const handleDelete = () => {
        randomGenerator();
        setDeleteLink(link + '/' + id);
        setIsToDelete(true);
    }

    return {  handleDelete, isToDelete, deleteLink, axiosDelete };
}

export default DeleteBean;