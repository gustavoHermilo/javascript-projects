const taskInput= document.getElementById("taskInput");
const addTaskBtn= document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.onclick= function(){
    const taskText= taskInput.ariaValueMax;

    if (taskText===""){
        alert("Please enter a task");
        return;
    }
    const li= document.createElement("li");
    li.textContent = taskText;

    const deleteBtn= document.createElement("Button");
    deleteBtn.textContent="Delete";

    deleteBtn.onclick= function(){
        taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value= "";
};
