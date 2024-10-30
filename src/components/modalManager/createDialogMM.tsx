import {modal} from "./modalManager";
import {CreateDialogComponent, DeleteDialogComponent} from "../shared/Dialog";
import {Todo} from "../../types";
import {useDeleteTodo} from "../../queries/deleteTodo";
import {useCreateTodo} from "../../queries/createTodo";

export const openDeleteTodoModal = (todo: Todo) => modal(({name, close}: any) => {
        const {mutate: deleteTodo} = useDeleteTodo()

        return <DeleteDialogComponent
            name={todo.text}
            handleClose={close}
            handleDelete={() => deleteTodo(todo.id, {onSuccess: close})}/>
    },
    {
        settings: {open: true},
    });

export const openCreateTodoModal = () => modal(({close}: any) => {
    const {mutate: createTodo} = useCreateTodo()

    return <CreateDialogComponent handleClose={close} handleSubmit={todo => createTodo(todo, {onSuccess: close})}/>
}, {
    props: {},
    settings: {open: true},
});