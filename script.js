const IB = document.getElementById("input-box");
const LC = document.getElementById("todo-content");

function addlist(){
    if(IB.value === ""){
        alert("Please enter a task!!");
    }
    else{
        let li = document.createElement("li");

        // ⏰ Get current time
        let now = new Date();
        let time = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        // Task text
        let textNode = document.createTextNode(IB.value + " ");
        li.appendChild(textNode);

        // ⏰ Time display
        let timeSpan = document.createElement("small");
        timeSpan.innerHTML = "(" + time + ")";
        timeSpan.className = "time";
        li.appendChild(timeSpan);

        // ✏️ Edit button
        let edit = document.createElement("span");
        edit.innerHTML = " 🖋️";
        edit.className = "edit";
        li.appendChild(edit);

        // ❌ Delete button
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

    // ✅ Mark complete
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

        if(e.target.classList.contains("checked")){
            alert("Task completed successfully ✅");
        }

        saveinfo();
    }

    // ❌ Delete
    else if(e.target.className === "delete"){
        e.target.parentElement.remove();
        saveinfo();
    }

    // ✏️ Edit (fixed so time stays safe)
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