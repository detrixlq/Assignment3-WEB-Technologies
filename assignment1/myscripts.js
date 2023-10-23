const newTaskInput = document.querySelector("#newTask");
const addTaskButton = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");

addTaskButton.addEventListener("click", function() {
  const newTaskText = newTaskInput.value;

  const newTaskItem = document.createElement("li");
  newTaskItem.textContent = newTaskText;

  const deleteTask = document.createElement("button")
  deleteTask.textContent = "Delete Task"

  taskList.appendChild(newTaskItem);

  newTaskInput.value = "";
});

taskList.addEventListener("click", function(event) {
  const targetElement = event.target;

  if (targetElement.nodeName === "LI") {
    targetElement.classList.toggle("completed");
  }
});
