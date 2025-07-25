const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const inputWrapper = document.getElementById("inputWrapper");

addButton.setAttribute("title", "Add task");

// Mensagem de erro
const errorMessage = document.createElement("p");
errorMessage.textContent = "Please enter a task";
errorMessage.style.color = "red";
errorMessage.style.fontSize = "0.75rem";
errorMessage.style.marginTop = "-1rem";
errorMessage.style.fontFamily = "Noto Sans, sans-serif";
errorMessage.style.display = "none";
errorMessage.style.textAlign = "center";

inputWrapper.insertAdjacentElement("afterend", errorMessage);

// Reset error style on input
taskInput.addEventListener("input", () => {
  taskInput.style.border = "none";
  taskInput.style.boxShadow =
    "inset 0 1px 2px rgba(160, 140, 230, 0.15), inset 0 -1px 2px rgba(255, 255, 255, 0.3)";
  errorMessage.style.display = "none";
});

// Add task on button click
addButton.addEventListener("click", () => {
  const text = taskInput.value.trim();

  if (text.length < 1) {
    taskInput.style.border = "2px solid rgba(255, 0, 0, 0.4)";
    taskInput.style.boxShadow = "0 0 8px rgba(255, 0, 0, 0.4)";
    errorMessage.style.display = "block";
    return;
  }

  const li = document.createElement("li");
  li.classList.add("task");

  const divWrapper = document.createElement("div");
  divWrapper.classList.add("taskDivWrapper");

  const circleButton = document.createElement("i");
  circleButton.classList.add("fa-solid", "fa-circle");
  circleButton.setAttribute("title", "Mark as completed");

  const taskText = document.createElement("p");
  taskText.textContent = text;

  const removeIcon = document.createElement("i");
  removeIcon.classList.add("fa-solid", "fa-xmark");
  removeIcon.setAttribute("title", "Remove Task");

  divWrapper.appendChild(circleButton);
  divWrapper.appendChild(taskText);
  li.appendChild(divWrapper);
  li.appendChild(removeIcon);
  taskList.appendChild(li);

  taskInput.value = "";

  // Remove task
  removeIcon.addEventListener("click", () => {
    li.remove();
  });

  // Toggle task completed
  circleButton.addEventListener("click", () => {
    const isCompleted = circleButton.classList.contains("fa-circle-check");

    if (isCompleted) {
      circleButton.classList.remove("fa-circle-check");
      circleButton.classList.add("fa-circle");
      circleButton.setAttribute("title", "Mark as completed");
      circleButton.style.color = "";
      taskText.style.textDecoration = "";
      taskText.style.color = "";
    } else {
      circleButton.classList.remove("fa-circle");
      circleButton.classList.add("fa-circle-check");
      circleButton.setAttribute("title", "Unmark completed");
      circleButton.style.color = "#8ccfa8";
      taskText.style.textDecoration = "line-through";
      taskText.style.color = "#cccccc";
    }
  });
});
