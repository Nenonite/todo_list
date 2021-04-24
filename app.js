const text = document.querySelector("textarea");
const btn = document.querySelector("button");
const drop = document.querySelectorAll(".drop");
const start = document.querySelector(".start");

let id = 0;
let allTasks;
btn.onclick = function() {
    if(text.value == "") alert("Список задач пустой!");
    else {
        id++;
        let p = document.createElement("p");
        p.setAttribute("id", id);
        p.draggable = "true";
        p.innerHTML += `Задача #${id}: ${text.value} <img src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_delete_48px-512.png" id=${id} style="width:15px;" </img>`;
        p.style.textAlign = "center"
        start.appendChild(p);

        let deleteImg = p.querySelector("img");
        deleteImg.onclick = function() {
            if(deleteImg.id == p.id) p.style.display="none"
        }

        allTasks = start.querySelectorAll("p");

        for(let i = 0; i < allTasks.length; i++) {
            allTasks[i].ondragstart = function(event) {
                event.dataTransfer.setData("text", event.target.id);

            }
        }
    }
}

for(let c = 0; c < drop.length; c++) {
    drop[c].ondragover = function(event) {
        event.preventDefault();
    }
    drop[c].ondrop = function(event) {
        event.preventDefault();
        let id = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(id));
    }
}
