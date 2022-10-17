const form = document.querySelector('#form');
let task = document.getElementById('task').value;
let project = document.getElementById('project').value;
let hour = document.getElementById('hour').value;

const newTasks = document.getElementById('newTask');
newTasks.addEventListener('click', ()=> {
    form.style.display = 'block';
    form.style.transition = 'all .2s linear';
});

class AddTask {
    constructor(task, project, hour) {
        this._task = task;
        this._project = project;
        this._hour = hour;
    };
};

function registerData() {
    let Tasks = new AddTask(task = document.getElementById('task').value, project = document.getElementById('project').value, hour = document.getElementById('hour').value);

    if (Tasks._task && Tasks._project && Tasks._hour) {
        let newTasks = document.createElement('div');

        document.querySelector('#tagsWrapper').append(newTasks);
        newTasks.innerHTML = `
                <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992zM19 4H5v16h14V4zm-7.707 9.121l4.243-4.242 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414 2.475 2.475z" fill="rgba(31,154,80,1)"/></svg>${Tasks._task}</h2>
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5.001 5.001 0 0 1 14 13h-4a3.001 3.001 0 0 0-2.895 2.21z"/></svg>${Tasks._project}</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"/></svg>${Tasks._hour} HORAS</p>`;
        
        newTasks.classList.add('tasks');

        form.style.display = 'none';
        document.getElementById('task').value = "";
        document.getElementById('project').value = "";
        document.getElementById('hour').value = "";
    } else {
        let error = document.createElement('error');
        document.querySelector('#tagsWrapper').append(error);
        error.innerHTML = `<div class="error">
        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" fill="rgba(255,59,59,1)"/></svg>ERROR</p>
        </div>`
        
        error.classList.add('error');
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
    }
}



fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: "Maquetado",
        body: "Portfolio",
        userId: 101,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

let tareas = document.querySelector('#tagsWrapper');

fetch('./json/data.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((tarea) => {
            let newTasks = document.createElement('div');

            document.querySelector('#tagsWrapper').append(newTasks);
            newTasks.innerHTML = `
                <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992zM19 4H5v16h14V4zm-7.707 9.121l4.243-4.242 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414 2.475 2.475z" fill="rgba(31,154,80,1)"/></svg>${tarea.tareaHecha}</h2>
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5.001 5.001 0 0 1 14 13h-4a3.001 3.001 0 0 0-2.895 2.21z"/></svg>${tarea.proyectoHecho}</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"/></svg>${tarea.horasHechas} HORAS</p>`;
        
            newTasks.classList.add('tasks');
        })
    })