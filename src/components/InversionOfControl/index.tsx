import {ListTodo} from "../shared/Todo/ListTodo";
import {Button} from "@mui/material";
import {DeleteDialogIoC} from "./DeleteTodo";
import {CreateDialogIoC} from "./CreateTodo";

export const InversionOfControl = () => {
    return (
        <div style={{padding: '2rem'}}>
            <h3>Inversion of control</h3>
            <CreateDialogIoC>
                {({handleCreate}) => (
                    <Button variant="contained" onClick={handleCreate}>
                        Create Todo
                    </Button>
                )}
            </CreateDialogIoC>

            <DeleteDialogIoC>
                {({handleDelete}) => (
                    <ListTodo handleDelete={handleDelete}/>
                )}
            </DeleteDialogIoC>
        </div>
    )
}