const form = document.querySelector('.form');
const taskInput = document.querySelector('.task-input');
const dateInput = document.querySelector('.date');
const reminderInput = document.querySelector('.reminder');
const addBtn = document.querySelector('.add-task-btn');
const saveBtn = document.querySelector('.save-btn');
const tasksList = document.querySelector('.tasksList');

let tasks = [];
let loaded = false;

// Add Task

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let taskObj = {
        task: taskInput.value,
        date: dateInput.value,
        reminder: reminderInput.checked ? true : false,
    }
    tasks.push(taskObj);
    addTask(tasks);
    taskInput.value = ''
    dateInput.value = ''
    reminderInput.checked = false;
    console.log(reminderInput.value)
})

const addTask = (tasks) => {
    tasksList.innerHTML = '';
    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        if (task.reminder) {
            taskDiv.classList.add('border-left');
        }
        const div = document.createElement('div');
        div.classList.add('small-container');
        const h3 = document.createElement('h3');
        h3.classList.add('task-title')
        h3.appendChild(document.createTextNode(`${task.task}`));
        const btn = document.createElement('button');
        btn.classList.add('fas')
        btn.appendChild(document.createTextNode(`x`));
        div.appendChild(h3)
        div.appendChild(btn);
        const p = document.createElement('p').appendChild(document.createTextNode(`${task.date}`));
        taskDiv.appendChild(div)
        taskDiv.appendChild(p);
        // taskDiv.innerHTML = `
        //         <div class='small-container'>
        //             <h3 class='task-title'>${task.task}</h3>
        //             <i class="fas fa-times"></i>
        //         </div>
        //         <p class='task-date'>${task.date}</p>
        //     `;
        btn.addEventListener('click', function (e) {
            tasksList.removeChild(taskDiv);
            console.log(e.target)
        })
        tasksList.appendChild(taskDiv);
        loaded = true;
    })
}

// Toggle Form

addBtn.addEventListener('click', function () {
    form.toggleAttribute('hidden');
    addBtn.classList.toggle('close');
    addBtn.innerHTML = this.classList.contains('close') ? 'Close' : 'Add Task';
})




