import "./style.css"
import * as logic from "./logic.js"

const default1 = new logic.Project("man");
console.log(default1)
const  todo1 = new logic.Todo("watch tv", "get home quickly to watch AOT", " Today", "Urgent")
const  todo2 = new logic.Todo("watch anime", "get home quickly to watch AOT", " Today", "Urgent")
const  todo3 = new logic.Todo("listen to music", "get home quickly to watch AOT", " Today", "Urgent")

default1.addTodo(todo1)
default1.addTodo(todo2)
default1.addTodo(todo3)
console.log(default1)

default1.removeTodo(0)
console.log(default1)