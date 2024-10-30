import React, {ReactNode} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "../queries/queryClient";
import {createTheme, ThemeProvider} from "@mui/material";
import {RouterProvider, MemoryRouter, createMemoryRouter} from "react-router-dom";
import router from "../routes";
import {ModalContainer} from "@neeppy/modal-manager";
import {store} from "../components/modalManager/modalManager";

const theme = createTheme({})
export const TEST_memoryRouter = createMemoryRouter(router.routes)

export const renderWrapper = ({children}: { children: ReactNode }) => {
    return <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={TEST_memoryRouter}/>
            <ModalContainer store={store} />
        </ThemeProvider>
    </QueryClientProvider>
}