import React from 'react';
import './App.css';
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import {createTheme, ThemeProvider} from "@mui/material";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./queries/queryClient";
import {ModalContainer} from "@neeppy/modal-manager";
import {store} from "./components/modalManager/modalManager";

const theme = createTheme({})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}/>
                <ModalContainer store={store} />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
