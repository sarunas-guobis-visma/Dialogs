import {
    Button,
    Dialog,
    DialogActions, DialogContent,
    DialogContentText,
    DialogProps,
    DialogTitle,
} from "@mui/material";
import {TodoForm} from "../Todo/Form";
import {Todo} from "../../../types";

interface DeleteDialogComponentProps {
    name: string
    handleDelete: () => void
    handleClose: () => void
}

export const DeleteDialogComponent = ({name, handleDelete, handleClose}: DeleteDialogComponentProps) => {
    return (
        <>
            <DialogTitle>Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure to delete <b>{name}</b> item?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleDelete}>Delete</Button>
            </DialogActions>
        </>
    )
}

interface AlertDialogProps extends DialogProps, DeleteDialogComponentProps {

}

export const DeleteDialog = ({name, handleDelete, handleClose, ...props}: AlertDialogProps) => {
    return <Dialog {...props} onClose={handleClose}>
        <DeleteDialogComponent name={name} handleDelete={handleDelete} handleClose={handleClose}/>
    </Dialog>
}

interface CreateDialogComponentProps {
    handleClose: () => void
    handleSubmit: (todo: Todo) => void
}

export const CreateDialogComponent = ({handleSubmit, handleClose}: CreateDialogComponentProps) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData.entries()) as unknown as Todo
            handleSubmit(data)
        }}>
            <DialogTitle>Create</DialogTitle>
            <DialogContent>
                <TodoForm/>
            </DialogContent>
            <DialogActions>
                <Button type="button" onClick={handleClose}>Cancel</Button>
                <Button type="submit">Create</Button>
            </DialogActions>
        </form>
    )
}

interface CreateDialogProps extends DialogProps, CreateDialogComponentProps {

}

export const CreateDialog = ({handleSubmit, handleClose, ...props}: CreateDialogProps) => {
    return <Dialog {...props} onClose={handleClose}>
        <CreateDialogComponent handleClose={handleClose} handleSubmit={handleSubmit}/>
    </Dialog>
}