// JavaScript with intentional bugs

// Bug 4: Missing variable declaration keyword
// taskList = document.getElementById('taskList');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const totalTasksSpan = document.getElementById('totalTasks');
const completedTasksSpan = document.getElementById('completedTasks');
const remainingTasksSpan = document.getElementById('remainingTasks');

let tasks = [];
let taskIdCounter = 0;

// Bug 5: Function name typo - should be addEventListener
// addBtn.addEventListner('click', addTask);
addBtn.addEventListener('click', addTask);

// Bug 6: Missing event parameter
// taskInput.addEventListener('keypress', function() {
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    // Bug 7: Using assignment (=) instead of comparison (===)
    // if (taskText = '') {
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const task = {
        id: ++taskIdCounter,
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = '';
    renderTasks();
    updateStats();
}

function renderTasks() {
    taskList.innerHTML = '';
    
    // Bug 8: there actually wasn't a bug here! Sorry!
    for (let index in tasks) {
        console.log('task', index);
        const task = tasks[index];
        const taskItem = createTaskElement(task);
        taskList.appendChild(taskItem);
    }
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    
    // No bug 9 because it's too confusing but we encourage to try to understand this code
    li.innerHTML = `
        <span class="task-text ${task.completed ? 'task-completed' : ''}">${task.text}</span>
        <div class="task-actions">
            <button class="complete-btn" onclick="toggleTask(${task.id})">
                ${task.completed ? 'Undo' : 'Complete'}
            </button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </div>`
    
    return li;
}

function toggleTask(taskId) {
    // Bug 10: Using assignment instead of comparison in find method
    // const task = tasks.find(t => t.id = taskId);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        updateStats();
    }
}

function deleteTask(taskId) {
    // Bug 11: Incorrect method name - should be filter, not filer
    // tasks = tasks.filer(task => task.id !== taskId);
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
    updateStats();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const remaining = total - completed;

    totalTasksSpan.textContent = total;
    completedTasksSpan.textContent = completed;
    remainingTasksSpan.textContent = remaining;
}


function clearAllTasks() {
    tasks = [];
    renderTasks();
    updateStats();
}

// Bug 13: Missing semicolon and incorrect syntax
document.addEventListener('DOMContentLoaded', function() {
    console.log('App loaded!')
    // Bug 14: Calling undefined function
    // initializeApp()
});