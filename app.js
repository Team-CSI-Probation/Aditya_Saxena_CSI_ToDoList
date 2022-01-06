const todotask=document.querySelector(".task");
const taskdate=document.querySelector(".duedate");
const todobutton=document.querySelector(".todo-button");
const todolist=document.querySelector(".todo-list");


todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click',deleteCheck);

function addtodo(event){
    event.preventDefault();

    const tododiv=document.createElement("div");
    tododiv.classList.add("todo");

    const newtodo=document.createElement("li");
    newtodo.innerText=todotask.value;
    newtodo.classList.add("todo-item");
    tododiv.appendChild(newtodo);

    const tododate=document.createElement("li");
    tododate.innerText=taskdate.value;
    tododate.classList.add("todo-date");
    tododiv.appendChild(tododate);

    const checkbutton=document.createElement("button");
    checkbutton.innerHTML='<i class="fas fa-check"></i>';
    checkbutton.classList.add("complete-btn");
    tododiv.appendChild(checkbutton);
    const count=0;
    
    const deletebutton=document.createElement("button");
    deletebutton.innerHTML='<i class="fas fa-trash"></i>';
    deletebutton.classList.add("delete-btn");
    tododiv.appendChild(deletebutton);

    todolist.appendChild(tododiv);

    todotask.value="";
    taskdate.value="";
}

function deleteCheck(e){
    const item=e.target;

    if(item.classList[0]==="delete-btn"){
        const todo= item.parentElement;
        todo.classList.add("fall");
        todo.style.opacity=0;
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    if(item.classList[0]==="complete-btn"){
            const todo= item.parentElement;
            todo.style.textDecoration="line-through";
            todo.style.opacity="0.5";  
    }
}