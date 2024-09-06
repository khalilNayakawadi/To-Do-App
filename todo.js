let inputTask = document.getElementById('taskinput');
let addTaskBtn = document.getElementById("addtask") ;
tasks = document.getElementById("tasks");
let task = document.getElementsByClassName("taskdiv");

let taskDiv = document.createElement('div');
let taskName = document.createElement('h4')
let taskDone = document.createElement('input')
let removerBtn = document.createElement('button')

addTaskBtn.addEventListener('click',()=>{
    if(inputTask.value != ""){
        taskDiv = document.createElement('div');
        taskName = document.createElement('h4')
        taskDone = document.createElement('input')
        removerBtn = document.createElement('button')
        taskDone.type = "checkbox";
        taskDone.style.width = "30px";
        taskDone.style.height= "30px";
        taskName.innerText = inputTask.value ;
        taskDiv.classList.add("taskdiv")
        removerBtn.classList.add("btn")
        removerBtn.classList.add("btn-outline-primary")
        removerBtn.innerText = "🗑️"
        tasks.appendChild(taskDiv)
        taskDiv.appendChild(taskName)
        taskDiv.appendChild(taskDone)
        
        inputTask.value = "";
    }
})
