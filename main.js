
const addTask = () =>{
       add_task = document.querySelector('#task');
       var task = document.createElement('div');
       task.classList.add("task-input-1");
       var task_val = document.getElementById("task-input").value;
    //    console.log(task_val);
       task.innerHTML = `<div class="content">
       <input type="text" class=tasks placeholder="${task_val}" readonly>
       </div>
    <div class="action">
    <button class="edit" onClick="edit(this)">Edit</button> 
    <button class="delete" onClick="del(this)">Delete</button> </div>`;
    // console.log(task);   
    // console.log(document.getElementById('task-input-1'));
    add_task.appendChild(task); 
    
}
const del = (e) =>{
    console.log(e.parentNode.parentNode.parentNode);
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}
const edit = (e) =>{ 
    // task_in = document.getElementsByClassName("edit")
    e.parentNode.previousElementSibling.childNodes[1].removeAttribute("readonly");
    
    // if (edit.innText)
}
