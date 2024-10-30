import {http, HttpResponse, RequestHandlerOptions} from 'msw'
import {Todo} from "../../types";

const STORAGE_KEY = 'todos'

const getTodos = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')


export const handlers = [
    http.get('/api/todos', () => {
        return HttpResponse.json(getTodos())
    }),
    http.post('/api/todos', async (req) => {
        const data = await req.request.json()
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...getTodos(), data]))
        return HttpResponse.json(data)
    }),
    http.get('/api/todos/:id', async (req) => {
        const id = req.params.id as string
        const todos = getTodos()
        const todo = todos.find((todo: Todo) => todo.id === id)

        return HttpResponse.json(todo)
    }),
    http.delete('/api/todos/:id', async (req) => {
        const id = req.params.id as string
        const todos = getTodos()
        const updatedTodos = todos.filter((todo: Todo) => todo.id !== id)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos))

        return HttpResponse.json(todos)
    }),
]

export const overrideGetTodos = ({body, options}: {
    id?: number,
    body?: Todo[],
    options?: RequestHandlerOptions
} = {}) => {
    return http.get(
        `/api/todos`,
        () => HttpResponse.json(body as Todo[]),
        options ?? {})
}

export const overrideGetTodoById = ({id, body, options}: {
    id?: number,
    body?: Todo,
    options?: RequestHandlerOptions
} = {}) => {
    return http.get(
        `/api/todos/${id}`,
        () => HttpResponse.json(body as Todo),
        options ?? {})
}