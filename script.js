const addButton=document.getElementById("add-btn");
const task=document.getElementById("task-input");
const taskList=document.getElementById("task-list");
addButton.addEventListener("click",()=>{

    // remove white spaces or extra spaces
    const formattedText=task.value.trim();
    console.log(formattedText);

    //check if the task is valid

    if(formattedText===''){
        alert("Enter a valid task!");
        return;
    }

    //create a new li element and add the formatted text to that li element

    const li=document.createElement("li");
    li.textContent=formattedText;

    //add this newly created li element to the original task list
    taskList.appendChild(li);

    //create a space to show this added task
    const span = document.createElement("span");
    span.textContent = formattedText;

    const deleteButton=document.createElement("button");
    deleteButton.textContent="DELETE"
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click',()=>{
    li.remove();
    //after removing any task,remove its corresponding delete button also from the DOM
    deleteButton.remove();
    })
    task.value="";
});
