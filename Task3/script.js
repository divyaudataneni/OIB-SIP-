const taskTitleInput = document.getElementById("inputEl");
const taskDescriptionInput = document.getElementById("textarea");
const addTaskBtn = document.getElementById("button");
const taskList = document.getElementById("table-list");

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = ''; // Clear previous tasks
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        const newRow = taskList.insertRow();
        const titleCell = newRow.insertCell(0);
        const descriptionCell = newRow.insertCell(1);
        const actionCell = newRow.insertCell(2);
        titleCell.textContent = task.title;
        descriptionCell.textContent = task.description;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            let newTasks = [];
            for (let i = 0; i < tasks.length; i++) {
                if (i !== index) {
                    newTasks.push(tasks[i]);
                }
            }
            tasks = newTasks;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        });
        actionCell.appendChild(deleteButton);
    }
}

renderTasks(); // Render tasks on page load

addTaskBtn.addEventListener("click", function() {
    const taskTitle = taskTitleInput.value.trim();
    const taskDescription = taskDescriptionInput.value.trim();
    if (taskTitle !== "" && taskDescription !== "") {
        tasks.push({ title: taskTitle, description: taskDescription });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
    }
});
