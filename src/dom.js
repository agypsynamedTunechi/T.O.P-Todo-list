import editIcon from "../img/file-edit.svg";
import deleteIcon from "../img/trash-can.svg";
import plusIcon from "../img/plus.svg";

export function Display() {
  const main = document.querySelector("#content");

  const projectContainer = document.createElement("div");
  projectContainer.className = "project-container";
  const projectHeader = document.createElement("div");
  projectHeader.className = "project-header";
  const projectH2 = document.createElement("h2");
  projectH2.textContent = "PROJECTS";
  const AddProject = document.createElement("button");
  AddProject.className = "add-project";
  const AddProjectImg = document.createElement("img");
  AddProjectImg.src = plusIcon;
  const AddProjectSpan = document.createElement("span");
  AddProjectSpan.textContent = "New Project"

  AddProject.appendChild(AddProjectImg)
  AddProject.appendChild(AddProjectSpan)

  projectHeader.appendChild(projectH2);
  projectContainer.appendChild(projectHeader);
  projectContainer.appendChild(AddProject)
    
  const todoContainer = document.createElement("div");
  todoContainer.className = "todo-container"

  
  
  main.appendChild(projectContainer);
  main.appendChild(todoContainer)   
}

export function DisplayProject() {
  const projects = document.createElement("div");
  projects.className = "projects";
  const project = document.createElement("div");
  project.className = "project";
  const para = document.createElement("p");
  para.textContent = "School";
  const edit = document.createElement("div");
  edit.className = "edit";
  const editButton = document.createElement("button");
  const editImg = document.createElement("img");
  const editSpan = document.createElement("span");
  editSpan.textContent = "edit";
  editImg.src = editIcon;
  const deleteButton = document.createElement("button");
  const deleteImg = document.createElement("img");
  const deleteSpan = document.createElement("span");
  deleteSpan.textContent = "delete";
  deleteImg.src = deleteIcon;

  editButton.appendChild(editImg);
  editButton.appendChild(editSpan);
  deleteButton.appendChild(deleteImg);
  deleteButton.appendChild(deleteSpan);
  edit.appendChild(editButton);
  edit.appendChild(deleteButton);

  project.appendChild(para);
  project.appendChild(edit);
  projects.appendChild(project);

  projectContainer.appendChild(projects);
}

export function DisplayTodo() {}
