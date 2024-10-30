import {useMutation} from "@tanstack/react-query";
import {Todo} from "../types";
import {queryClient} from "./queryClient";

const deleteTodoApi = (todoId: string) => {
    return fetch(`/api/todos/${todoId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json() as Promise<Todo>)
}

export const useDeleteTodo = () => {
    return useMutation({
        mutationFn: (todoId: string) => deleteTodoApi(todoId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })
}