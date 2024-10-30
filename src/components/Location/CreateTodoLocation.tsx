import {CreateDialog} from "../shared/Dialog";
import {useCreateTodo} from "../../queries/createTodo";
import {useNavigate} from "react-router-dom";

export const CreateTodoLocation = () => {
    const {mutate: createTodo} = useCreateTodo()
    const navigate = useNavigate();

    const closeModal = () => navigate('/dialogs/location')

    return (
        <CreateDialog
            open={true}
            handleClose={closeModal}
            handleSubmit={todo => createTodo(todo, {
                onSuccess: closeModal
            })}/>
    )
}