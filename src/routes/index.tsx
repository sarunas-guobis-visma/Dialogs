import {createBrowserRouter} from "react-router-dom";
import {StateDialog} from "../components/state";
import {BaseLayout} from "../components/shared/layouts";
import {InversionOfControl} from "../components/InversionOfControl";
import {ModalManagerDialog} from "../components/modalManager";
import {LocationDialog} from "../components/Location";
import {CreateTodoLocation} from "../components/Location/CreateTodoLocation";
import {DeleteTodoLocation} from "../components/Location/DeleteTodoLocation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
        children: [
            {
                path: "/dialogs/state",
                element: <StateDialog/>
            },
            {
                path: "/dialogs/inverseControl",
                element: <InversionOfControl/>
            },
            {
                path: "/dialogs/modalManager",
                element: <ModalManagerDialog/>
            },
            {
                path: "/dialogs/location",
                element: <LocationDialog/>,
                children: [
                    {
                        path: "/dialogs/location/create",
                        element: <CreateTodoLocation />
                    },
                    {
                        path: "/dialogs/location/delete/:id",
                        element: <DeleteTodoLocation />
                    },
                ]
            },
        ]
    },
]);

export default router