const IB = document.getElementById("input-box");
const LC = document.getElementById("todo-content");

function addlist(){
    if(IB.value === ""){
        alert("Please enter a task!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = IB.value;
        LC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    IB.value = '';
    saveinfo();
}
LC.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveinfo();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveinfo();
    }
}, 
false);

function saveinfo(){
    localStorage.setItem("data", LC.innerHTML);
}

function showinfo(){
    LC.innerHTML = localStorage.getItem("data");
}
showinfo();