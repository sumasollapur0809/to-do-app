const IB = document.getElementById("input-box");
const LC = document.getElementById("todo-content");

function addlist(){
    if(IB.value === ""){
        alert("Please enter a task!!");
    }
    else{
        let li = document.createElement("li");

        // ⏰ Get time (HH:MM only)
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        let time = hours + ":" + minutes;

      
        let textNode = document.createTextNode(IB.value + " ");
        li.appendChild(textNode);

 
        let timeSpan = document.createElement("small");
        timeSpan.innerHTML = "(" + time + ")";
        timeSpan.className = "time";
        li.appendChild(timeSpan);

     
        let edit = document.createElement("span");
        edit.innerHTML = " 🖋️";
        edit.className = "edit";
        li.appendChild(edit);

       
        let del = document.createElement("span");
        del.innerHTML = "\u00d7";
        del.className = "delete";
        li.appendChild(del);

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

        let taskText = li.childNodes[0].nodeValue.trim();

        let updatedTask = prompt("Edit your task:", taskText);

        if(updatedTask !== null && updatedTask.trim() !== ""){
            li.childNodes[0].nodeValue = updatedTask + " ";
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