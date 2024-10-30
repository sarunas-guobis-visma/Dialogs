import {act, render, screen, waitFor, within} from "@testing-library/react";
import App from "../../App";
import {renderWrapper, TEST_memoryRouter} from "../utils";
import {overrideGetTodoById, overrideGetTodos} from "../mocks/handlers";
import {mswServer} from "../mocks/mswServer";


describe('ListPage test suite', () => {
    it.each([
        {name: "state", path: "/dialogs/state"},
        {name: "Inversion of control", path: "/dialogs/inverseControl"},
        {name: "Dialog manager", path: "/dialogs/modalManager"},
        {name: "Location", path: "/dialogs/location"},
    ])(`should open create modal in $name page`, ({path}) => {
        render(<App/>, {wrapper: renderWrapper});
        act(() => {
            TEST_memoryRouter.navigate(path)
        })

        act(() => {
            screen.getByRole('button', {
                name: /create todo/i
            }).click()
        })

        expect(screen.getByRole('heading', {
            name: /create/i
        })).toBeDefined();
    });

    it.each([
        {name: "state", path: "/dialogs/state"},
        {name: "Inversion of control", path: "/dialogs/inverseControl"},
        {name: "Dialog manager", path: "/dialogs/modalManager"},
        {name: "Location", path: "/dialogs/location"},
    ])(`should open delete modal in $name page`, async ({path}) => {
        mswServer.use(overrideGetTodos({body: [{id: "1", text: "Test todo", completed: false}], options: {once: true}}))
        mswServer.use(overrideGetTodoById({ id: 1, body: {id: "1", text: "Test todo", completed: false}, options: {once: true}}))
        render(<App/>, {wrapper: renderWrapper});

        act(() => {
            TEST_memoryRouter.navigate(path)
        })

        await waitFor(() => screen.getByText(/Test todo/i))

        act(() => {
            screen.getByRole('button', {
                name: /delete/i
            }).click()
        })

        const view = screen.getByText(/are you sure to delete item\?/i);
        await waitFor(() => within(view).getByText(/test todo/i)) // This line is required by Location pattern to wait for response

        expect(within(view).getByText(/test todo/i)).toBeDefined();
    });
})