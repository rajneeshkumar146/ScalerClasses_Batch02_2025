import { Modal, message } from "antd";
import { deleteMovie } from "../../api/movie";
import { ShowLoading, HideLoading } from "../../redux/loaderSlice";
import { useDispatch } from "react-redux";

const DeleteMovieModal = ({
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    selectedMovie,
    setSelectedMovie,
    getData,
}) => {

    const dispatch = useDispatch();

    const handleOk = async () => {

    }

    const handleCancel = () => {

    }

    return <Modal
       
    >
        Are you sure you want to delete this movie?
    </Modal>


}

export default DeleteMovieModal;