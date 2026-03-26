import editIcon from "../img/file-edit.svg";
import deleteIcon from "../img/trash-can.svg";
import { projectContainer } from "./dom.js";


export function DisplayProject(title) {
  const projects = document.createElement("div");
  projects.className = "projects";
  const project = document.createElement("div");
  project.className = "project";
  const para = document.createElement("p");
  para.textContent = title;
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