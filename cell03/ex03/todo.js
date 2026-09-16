const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

window.onload = function() {
    loadTodoList();
};

newBtn.addEventListener('click', function() {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        createTodo(text.trim());
        saveTodoList();
    }
});


function createTodo(text) {
    const todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    todoDiv.addEventListener('click', function() {
        if (confirm('Do you really want to delete this TO DO?')) {
            todoDiv.remove();
            saveTodoList();
        }
    });

    
    ftList.insertBefore(todoDiv, ftList.firstChild);
}

function saveTodoList() {
    const todos = [];
    const items = ftList.querySelectorAll('div');
    
    items.forEach(item => {
        todos.push(item.textContent);
    });

    const jsonStr = JSON.stringify(todos);
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // เก็บ Cookie ไว้ 7 วัน
    document.cookie = `todoList=${encodeURIComponent(jsonStr)}; expires=${d.toUTCString()}; path=/`;
}

function loadTodoList() {
    const cookies = document.cookie.split(';');
    for (let c of cookies) {
        c = c.trim();
        if (c.startsWith('todoList=')) {
            const jsonStr = decodeURIComponent(c.substring('todoList='.length));
            try {
                const todos = JSON.parse(jsonStr);
                for (let i = todos.length - 1; i >= 0; i--) {
                    createTodo(todos[i]);
                }
            } catch (e) {
                console.error('Error parsing cookies', e);
            }
            break;
        }
    }
}