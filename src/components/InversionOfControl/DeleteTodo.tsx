import {DeleteDialog} from "../shared/Dialog";
import {ReactNode, useState} from "react";
import {Todo} from "../../types";
import {useDeleteTodo} from "../../queries/deleteTodo";

interface DeleteDialogIoCChildProps {
    handleDelete: (id: Todo) => void
}


interface DeleteDialogIoCProps {
    children: (props: DeleteDialogIoCChildProps) => ReactNode
}


export const DeleteDialogIoC = ({children}: DeleteDialogIoCProps) => {
    const [openDelete, setOpenDelete] = useState(false)
    const [selectedForDelete, setSelectedForDelete] = useState<Todo>()

    const {mutate: deleteTodo} = useDeleteTodo()

    return (
        <>
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
            {children({
                handleDelete: (todo) => {
                    setOpenDelete(true)
                    setSelectedForDelete(todo)
                }
            })}
        </>
    )
}