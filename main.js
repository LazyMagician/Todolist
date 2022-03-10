
const addTask = () =>{
       add_task = document.querySelector('#task');
       var task = document.createElement('div');
       task.classList.add("task-input-1");
       var task_val = document.getElementById("task-input").value;
    //    console.log(task_val);
       task.innerHTML = `<div class="content">
       <input type="text"  placeholder="${task_val}" readonly>
       </div>
    <div class="action">
    <button onClick="del(this)">Delete</button> </div>`;
    // console.log(task);   
    // console.log(document.getElementById('task-input-1'));
    add_task.appendChild(task); 
    
}
const del = (e) =>{
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}
