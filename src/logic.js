export class Project{
    constructor(title){
        this.title = title;
        this.todos = [];
        this.uuid = crypto.randomUUID();
    }

    addTodo(todo){
        this.todos.push(todo)
    }

    removeTodo(index){
        this.todos.splice(index, 1)
    }

}
export class Todo{
    constructor(title, description,dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

