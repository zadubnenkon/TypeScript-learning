// Partial<T>
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
    title: "organize desk",
    description: "clear clutter",
};

const todo2: Todo = updateTodo(todo1, {
    description: "throw out trash",
});

//result:
// todo2 = {
//     title: "organize desk",
//     description: "throw out trash",
// };