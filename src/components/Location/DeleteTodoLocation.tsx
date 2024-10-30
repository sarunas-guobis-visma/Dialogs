import {DeleteDialog} from "../shared/Dialog";
import {useNavigate, useParams} from "react-router-dom";
import {useDeleteTodo} from "../../queries/deleteTodo";
import {useGetTodoById} from "../../queries/getTodoById";

export const DeleteTodoLocation = () => {
    const {id} = useParams<{ id: string }>()
    const navigate = useNavigate();

    const {data: todo} = useGetTodoById(id)
    const {mutate: deleteTodo} = useDeleteTodo()

    const closeModal = () => navigate('/dialogs/location')

    return (
        <DeleteDialog
            open={true}
            name={todo?.text || ''}
            handleClose={closeModal}
            handleDelete={() => deleteTodo(todo?.id!, {
                onSuccess: closeModal
            })}
        />
    )
}