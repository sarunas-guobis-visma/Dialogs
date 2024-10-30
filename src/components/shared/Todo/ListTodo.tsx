import {useGetTodos} from "../../../queries/getTodos";
import {List, ListItem, ListItemText, Checkbox, Grid2, Button} from "@mui/material";
import {Todo} from "../../../types";


interface ListTodoProps {
    handleDelete: (todo: Todo) => void
}

export const ListTodo = ({handleDelete}: ListTodoProps) => {
    const {data: todos} = useGetTodos()

    return (
        <Grid2 container>
            <Grid2 size={{xs: 12}}>
                <h2>List Todo</h2>
            </Grid2>
            <Grid2 size={{xs: 6}}>
                <List>
                    {todos?.map(todo => (
                        <ListItem key={todo.id}>
                            <ListItemText>
                                {todo.text}
                            </ListItemText>
                            <Checkbox checked={todo.completed} disabled/>
                            <Button variant="contained" size="small" onClick={() => handleDelete(todo)}>Delete</Button>
                        </ListItem>
                    ))}
                </List>
            </Grid2>
        </Grid2>
    )
}