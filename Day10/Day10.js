const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const thingsTodo = JSON.parse(localStorage.getItem("Things")) ?? [];
const inputValue = $('#thing-todo')
const addButton = $('.add')
const todoList = $('.todo__list')


if(thingsTodo)
    showThingsToDo()


console.log(JSON.parse(localStorage.getItem("Things")))
function refreshInput(){
    inputValue.value = '';
    inputValue.focus();
}
function saveInStorage(data){
    localStorage.setItem("Things",JSON.stringify(data))
}
function saveToArr(value){
    if(value == ''){
        alert('Please enter a value')
    }
    else
    {   
        thingsTodo.forEach((thing,index) => {
            console.log([thingsTodo]);
            if(thing.name == value){
                alert('Things is already in the list')
            }
           
        })   
        
        console.log(value);
        thingsTodo.push({
            name: value,
            isCompleted: false
        })
        console.log(thingsTodo);
        saveInStorage(thingsTodo)
        
    }
}
function showThingsToDo(){
    function handleShow(thing, index){
        return `
        <li class="todo" key="${index}">
            <span 
                class="todo__text ${thing.isCompleted ? 'completed' : []}"
                onclick="completeThings(${index})">
            ${thing.name}
            </span>
            <button 
                class="delete"
                onclick="deleteThings(${index})">
                &times;
            </button>
        </li>
        `
    }
    var html = thingsTodo.map(handleShow);
    todoList.innerHTML = html.join('');
    
}
function deleteThings(index){
    thingsTodo.splice(index, 1)
    showThingsToDo()
    saveInStorage(thingsTodo)
}
function completeThings(index){
    const textTodo = $$('.todo__text')
    textTodo[index].classList.toggle('completed')
    if(textTodo[index].classList.contains('completed')){
        thingsTodo[index].isCompleted = true
    }
    else{
        thingsTodo[index].isCompleted = false
    }
    saveInStorage(thingsTodo)
}
function handleShowThingsToDo(){
    const value = inputValue.value;
    saveToArr(value);
    showThingsToDo();
    refreshInput();
    // console.log(thingsTodo);
    
}

addButton.addEventListener('click', handleShowThingsToDo);

document.onkeydown = (e)=>{
    if (e.which === 13){
        handleShowThingsToDo()
    }
}


