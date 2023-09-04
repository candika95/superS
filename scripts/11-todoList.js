const todoList = [{
  name:'make dinner',
  dueDate: '2022-12-22'
},{
  name: 'make coffe',
  dueDate: '2022-12-22'
}
  
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for(let i = 0; i < todoList.length; i++){
    const todoObj = todoList[i];
    // const name = todoObj.name;
    // const dueDate = todoObj.dueDate;
    const { name, dueDate } = todoObj;
    todoListHTML +=  `
    <div>${name}</div>
     <div>${dueDate}</div>
    <button class="delete-todo-button" onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button> `;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');

  const name = inputElement.value;
  const dueDate = dateInputElement.value;
  todoList.push({
    name,   //name: name;
    dueDate  //dueDate: dueDate
  });

  inputElement.value = '';
  
  renderTodoList();
}