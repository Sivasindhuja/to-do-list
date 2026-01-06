const textContent=document.getElementById("task-input");
const addButton=document.getElementById("add-btn");
const taskList=document.getElementById("task-list");

const tasks=[];

function loadTasks(){
    const savedTasks=JSON.parse(localStorage.getItem("Tasks"));
    if(savedTasks){
        savedTasks.forEach(task => {
        tasks.push(task);
        renderList(task.text,task.completed);
    });
    }  
}

function toggleCompleted(taskText) {
    const task = tasks.find(t => t.text === taskText);

    if (task) {
        task.completed = !task.completed;
        saveTasks();
    }
}

addButton.addEventListener("click",()=>{

    const text=textContent.value;
    const formattedText=text.trim();

    if(formattedText===""){
        return;
    }

    tasks.push({
        text:formattedText,
        completed:false
    });
    saveTasks();

    renderList(formattedText,false);
    
    textContent.value="";
})

function renderList(formattedText,completed){
    const li=document.createElement("li");
    
    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.checked=completed


    const task=document.createElement("span");
    task.textContent=formattedText;

    if(completed){
        li.classList.add("completed");
    }

    checkbox.addEventListener("change",()=>{
        li.classList.toggle("completed");
        toggleCompleted(formattedText);
    })
    const deleteButton=document.createElement("button");
    deleteButton.textContent="DELETE";

    deleteButton.addEventListener("click",(e)=>{
        e.stopPropagation();
        li.remove();
        
        const index=tasks.findIndex(
            function(t){
               return t.text===formattedText;
            }
        )
        if(index!==-1){
            tasks.splice(index,1);
            saveTasks();
        }

    })

    // li.appendChild(task); 
    // li.appendChild(deleteButton);

    //or

    li.append(checkbox,task,deleteButton);

    taskList.append(li);

}

function saveTasks(){
    localStorage.setItem("Tasks",JSON.stringify(tasks));
}

loadTasks();

