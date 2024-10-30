import {useMutation} from "@tanstack/react-query";
import {Todo} from "../types";
import {queryClient} from "./queryClient";

const createTodosApi = (todo: Todo) => {
    return fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify({
            ...todo,
            id: Math.random().toString()
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json() as Promise<Todo>)
}

export const useCreateTodo = () => {
    return useMutation({
        mutationFn: (todo: Todo) => createTodosApi(todo),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })
}