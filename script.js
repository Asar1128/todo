const inputel = document.querySelector('.input-el')
const submitbtn = document.querySelector('.submit-el')
const todocontainer = document.querySelector('.todo-list') 

//eventlistners
todocontainer.addEventListener("click", deletecheck)

//submitbtn.addEventListener("click",addtodo) 
//simple eventlistner
 submitbtn.addEventListener("click", () =>{
    
     //create div
    const tododiv = document.createElement('div')
    tododiv.classList.add('todo')
    //create LI
    let newtodo = document.createElement("li")
    newtodo.classList.add("new-todo")
    newtodo.innerText = inputel.value
    tododiv.appendChild(newtodo)
    //complete button
    const completebtn = document.createElement('button')
    completebtn.innerHTML=  '<i class ="fas fa-check"></i> '
    completebtn.classList.add('complete-btn')
    tododiv.appendChild(completebtn)
    //trash btn
    const trashbtn = document.createElement('button')
    trashbtn.innerHTML=  '<i class ="fas fa-trash"></i> '
    trashbtn.classList.add('trash-btn')
    tododiv.appendChild(trashbtn)
    //append to list
   todocontainer.appendChild(tododiv)
   //clear the todo input
   inputel.value = ""
  
}) 

function deletecheck(event){
    const item =event.target
    //delete the todo
if (item.classList[0] === "trash-btn"){
    const todo = item.parentElement
    todo.remove()
} //check mark
if(item.classList[0] === "complete-btn"){
    const todo  = item.parentElement
 todo.classList.toggle("completed")
}


}