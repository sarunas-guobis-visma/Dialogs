import {CreateDialog, DeleteDialog} from "../shared/Dialog";
import {useState} from "react";
import {ListTodo} from "../shared/Todo/ListTodo";
import {useCreateTodo} from "../../queries/createTodo";
import {Button} from "@mui/material";
import {Todo} from "../../types";
import {useDeleteTodo} from "../../queries/deleteTodo";

export const StateDialog = () => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [selectedForDelete, setSelectedForDelete] = useState<Todo>()

    const {mutate: createTodo} = useCreateTodo()
    const {mutate: deleteTodo} = useDeleteTodo()

    return (
        <div style={{padding: '2rem'}}>
            <h3>State</h3>

            <Button variant="contained" onClick={() => setOpenCreate(true)}>
                Create Todo
            </Button>
            <ListTodo handleDelete={todo => {
                setSelectedForDelete(todo)
                setOpenDelete(true)
            }}/>
            <DeleteDialog
                open={openDelete}
                name={selectedForDelete?.text || ''}
                handleClose={() => setOpenDelete(false)}
                handleDelete={() => deleteTodo(selectedForDelete?.id!, {
                    onSuccess: () => {
                        setOpenDelete(false)
                        setSelectedForDelete(undefined)
                    }
                })}
            />
            <CreateDialog
                open={openCreate}
                handleClose={() => setOpenCreate(false)}
                handleSubmit={todo => createTodo(todo, {
                    onSuccess: () => {
                        setOpenCreate(false)
                    }
                })}/>
        </div>
    )
}