import {ListTodo} from "../shared/Todo/ListTodo";
import {Button} from "@mui/material";
import {openCreateTodoModal, openDeleteTodoModal} from "./createDialogMM";

export const ModalManagerDialog = () => {
    return (
        <div style={{padding: '2rem'}}>
            <h3>Dialog manager</h3>

            <Button variant="contained" onClick={() => openCreateTodoModal()}>
                Create Todo
            </Button>
            <ListTodo handleDelete={openDeleteTodoModal}/>
        </div>
    )
}