import {CreateDialog} from "../shared/Dialog";
import {ReactNode, useState} from "react";
import {useCreateTodo} from "../../queries/createTodo";


interface CreateDialogIoCChildProps {
    handleCreate: () => void
}


interface CreateDialogIoCProps {
    children: (props: CreateDialogIoCChildProps) => ReactNode
}


export const CreateDialogIoC = ({children}: CreateDialogIoCProps) => {
    const [openCreate, setOpenCreate] = useState(false)

    const {mutate: createTodo} = useCreateTodo()

    return (
        <>
            <CreateDialog
                open={openCreate}
                handleClose={() => setOpenCreate(false)}
                handleSubmit={todo => createTodo(todo, {
                    onSuccess: () => {
                        setOpenCreate(false)
                    }
                })}/>
            {children({handleCreate: () => setOpenCreate(true)})}
        </>
    )
}