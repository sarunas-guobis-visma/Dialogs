import {ListTodo} from "../shared/Todo/ListTodo";
import {Button} from "@mui/material";
import {Todo} from "../../types";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

export const LocationDialog = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const openCreate = () => navigate(location?.pathname + '/create')
    const openDelete = (todo: Todo) => navigate(location?.pathname + `/delete/${todo.id}`)

    return (
        <div style={{padding: '2rem'}}>
            <h3>Location</h3>

            <Button variant="contained" onClick={openCreate}>
                Create Todo
            </Button>
            <ListTodo handleDelete={openDelete}/>
            <Outlet/>
        </div>
    )
}