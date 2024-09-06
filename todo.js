let inputTask = document.getElementById('taskinput');
let addTaskBtn = document.getElementById("addtask") ;
tasks = document.getElementById("tasks");
let task = document.getElementsByClassName("taskdiv");


addTaskBtn.addEventListener('click',()=>{
    if(inputTask.value != ""){
        let task = document.createElement('div');
        let taskName = document.createElement('h4')
        let taskDone = document.createElement('input')
        let removerBtn = document.createElement('button')
        taskDone.type = "checkbox";
        taskName.innerText = inputTask.value ;
        task.classList.add("taskdiv")
        removerBtn.classList.add("btn")
        removerBtn.classList.add("btn-outline-primary")
        removerBtn.innerText = "🗑️"
        tasks.appendChild(task)
        task.appendChild(taskName)
        task.appendChild(taskDone)
        task.appendChild(removerBtn)
        inputTask.value = "";
    }
 
})
