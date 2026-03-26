import "./style.css"
import * as logic from "./logic.js"
import {Display, projectDialog} from "./dom.js"
import {DisplayProject} from "./projectUi.js"
import { DisplayTodo} from "./todoUi.js"


const main = document.querySelector("#content");
const projectTitleInput = document.querySelector("input");
const addBtn = document.querySelector(".add-btn")
const projects = [];


Display()

projectDialog.addEventListener("close", ()=>{
    const project = new logic.Project(projectTitleInput.value);
    DisplayProject(projectTitleInput.value)
    projects.push(project)
    console.log(projects)
})

addBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    projectDialog.close();
     
})

console.log(projects)



