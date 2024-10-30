import {Checkbox, Grid2, InputLabel, TextField} from "@mui/material";

export const TodoForm = () => {
    return <Grid2 container size={{xs: 12}}>
        <Grid2 size={{xs: 12}}>
            <TextField fullWidth name="text" title="Todo" label="Todo"/>
        </Grid2>

        <Grid2 size={{xs: 12}}>
            <InputLabel>
                Is completed
                <Checkbox name="completed" title="Completed"/>
            </InputLabel>

        </Grid2>
    </Grid2>
}