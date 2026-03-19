const IB = document.getElementById("input-box");
const LC = document.getElementById("todo-content");

function addlist(){
    if(IB.value === ""){
        alert("Please enter a task!!");
    }
    else{
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(IB.value));

        
        let edit = document.createElement("span");
        edit.innerHTML = " ✏️";
        edit.className = "edit";
        li.appendChild(edit);

       
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "delete";
        li.appendChild(span);

        LC.appendChild(li);
    }
    IB.value = '';
    saveinfo();
}

LC.addEventListener("click", function(e){

  
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

        if(e.target.classList.contains("checked")){
            alert("Task completed successfully ✅");
        }

        saveinfo();
    }

   
    else if(e.target.className === "delete"){
        e.target.parentElement.remove();
        saveinfo();
    }

  
    else if(e.target.className === "edit"){
        let li = e.target.parentElement;
        let taskText = li.childNodes[0].nodeValue;

        let updatedTask = prompt("Edit your task:", taskText);

        if(updatedTask !== null && updatedTask.trim() !== ""){
            li.childNodes[0].nodeValue = updatedTask;
            saveinfo();
        }
    }

}, false);

function saveinfo(){
    localStorage.setItem("data", LC.innerHTML);
}

function showinfo(){
    LC.innerHTML = localStorage.getItem("data");
}

showinfo();