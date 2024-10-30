import {useQuery} from "@tanstack/react-query";
import {Todo} from "../types";

const getTodosApi = () => {
    return fetch('/api/todos')
        .then(res => res.json() as Promise<Todo[]>)
}

export const useGetTodos = () => {
    return useQuery({ queryKey: ['todos'], queryFn: getTodosApi })
}