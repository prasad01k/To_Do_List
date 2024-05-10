// const todoList = [{name:'hi', dueDate: "2022-12-22"},{name:'hello',dueDate: "2022-12-22"}];
const todoList = [];
renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for(let i=0;i<todoList.length;i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `

                <div>${name}</div>
                <div> ${dueDate}</div>
                <button onclick = "
                    todoList.splice(${i},1);
                    renderTodoList();
                " style = "background-color: red; color: white; border: none;font-size: 15px; cursor: pointer;padding-top: 10px; padding-bottom: 10px">Delete</button>
            
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const date = document.querySelector('.dueDateInput')
    const dueDate = date.value;

    todoList.push({
       // name:name, dueDate:dueDate
       name, dueDate
    });
    console.log(todoList);

    inputElement.value = '';
    renderTodoList();
}