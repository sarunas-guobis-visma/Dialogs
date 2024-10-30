import {useQuery} from "@tanstack/react-query";
import {Todo} from "../types";

const getTodo = (todoId: string) => {
    return fetch(`/api/todos/${todoId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json() as Promise<Todo>)
}

export const useGetTodoById = (id?: string) => {
    return useQuery({
        queryKey: [`todos.${id}`, id],
        queryFn: () => getTodo(id!),
        enabled: !!id
    })
}