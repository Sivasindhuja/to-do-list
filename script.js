const addButton=document.getElementById("add-btn");
const task=document.getElementById("task-input");
const taskList=document.getElementById("task-list");

const tasks=[];

function loadTasks(){
    const savedItems=JSON.parse(localStorage.getItem("tasks"));
     if (savedItems) {
        savedItems.forEach(task => {
            tasks.push(task);
            renderTask(task.text,task.completed);
        });
    }
}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}


function renderTask(taskText,completed=false){
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked=completed

    checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
    toggleCompleted(taskText);
});

    const span = document.createElement("span");
    span.textContent = taskText;

    if (completed) {
        li.classList.add("completed");
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";

    deleteButton.addEventListener("click", () => {
        li.remove();
        deleteTask(taskText);
    });

    li.append(checkbox,span, deleteButton);
    taskList.appendChild(li);
}

//localStorage only stores data in the form of strings



addButton.addEventListener("click",()=>{

    // remove white spaces or extra spaces
    const formattedText=task.value.trim();
    console.log(formattedText);

    //check if the task is valid

    if(formattedText===''){
        alert("Enter a valid task!");
        return;
    }

    tasks.push({
        text:formattedText,
        completed:false
        
    })
    saveTasks();
    renderTask(formattedText,false);
    task.value="";
  

});
function deleteTask(taskText){
    const index=tasks.findIndex(
        function(t){
            return t.text===taskText;
        }
    )
    if(index!==-1){
        //remove that index from tasks array and save the new array to localStorage

        tasks.splice(index,1);
        saveTasks();
    }
}
function toggleCompleted(taskText) {
    const task = tasks.find(t => t.text === taskText);

    if (task) {
        task.completed = !task.completed;
        saveTasks();
    }
}

loadTasks();
