import plusIcon from "../img/plus.svg";

const main = document.querySelector("#content");
export const projectDialog = document.querySelector("#project-dialog");
export const projectContainer = document.querySelector(".project-container");

export function Display() {
  const projectHeader = document.createElement("div");
  projectHeader.className = "project-header";
  const projectH2 = document.createElement("h2");
  projectH2.textContent = "PROJECTS";
  const addProject = document.createElement("button");
  addProject.className = "add-project";
  const addProjectImg = document.createElement("img");
  addProjectImg.src = plusIcon;
  const addProjectSpan = document.createElement("span");
  addProjectSpan.textContent = "New Project";

  addProject.appendChild(addProjectImg);
  addProject.appendChild(addProjectSpan);

  projectHeader.appendChild(projectH2);
  projectContainer.appendChild(projectHeader);
  projectContainer.appendChild(addProject);

  const todoContainer = document.createElement("div");
  todoContainer.className = "todo-container";

  main.appendChild(projectContainer);
  main.appendChild(todoContainer);

  addProject.addEventListener("click", () => {
    projectDialog.showModal();
  });
}
