let todolist = [
    {
        item: 'Buy Milk',
        dueDate: '25/12/2023'
    },
    {
        item: "Take out the trash",
        dueDate: '01/01/2024'
    }
];
displayItems();

function addtodo() {
    let inputElement = document.querySelector('#input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todolist.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';

    for (let i = 0; i < todolist.length; i++) {
        // let item = todolist[i].item;
        // let dueDate = todolist[i].dueDate;
        let { item, dueDate } = todolist[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todolist.splice(${i}, 1);
        displayItems();"> Delete </button>
        `;
    }
    containerElement.innerHTML = newHtml;
}