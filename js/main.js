const todayN = document.getElementById('todayN');
const todayT = document.getElementById('todayT');
const month = document.getElementById('month');
const year = document.getElementById('year');

const tasks = document.getElementById('tasks');

const setDate = () => {
    const date = new Date();
    todayN.textContent = date.toLocaleString('es',{ day : 'numeric'});
    todayT.textContent = date.toLocaleString('es',{ weekday : 'long'});
    month.textContent = date.toLocaleString('es',{ month : 'short'});
    year.textContent = date.toLocaleString('es',{ year : 'numeric'});
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.task;
    if(!value) return
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasks.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
}

const order = () => {
    const done = [];
    const toDo = [];
    tasks.childNodes.forEach(element => {
        element.classList.contains('done') ? done.push(element) : toDo.push(element)
    })
    return [...toDo, ...done];
}



setDate();