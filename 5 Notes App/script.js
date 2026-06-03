const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let deleteButton = document.createElement("button");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    deleteButton.setAttribute("id", "delete");
    deleteButton.innerHTML = "delete";
    notesContainer.appendChild(inputBox).appendChild(deleteButton);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})