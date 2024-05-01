const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const todos = [];

const save = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const delItem = (event) => {
    const target = event.target.parentElement;
    target.remove();
}

const addItem = (todo) => {
    
 if (todo.text == ''){
        alert('내용을 입력해 주세요!');
     }

 else if (todo.text !== ''){
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');
        const checkBox = document.createElement('input');

        checkBox.setAttribute("type", 'checkbox');
        checkBox.setAttribute("class", "checkbox");

        button.innerText = 'Delete';
        span.innerText = todo.text;

        button.addEventListener('click', delItem);

        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);

        checkBox.addEventListener('change', (event) => {
            if(checkBox.checked){
                span.style.textDecorationLine = "line-through"
            }else{
                span.style.textDecorationLine = "none"
            }
        })
    }   
};

const handler = (event) => { // 이벤트 함수들 조작
    event.preventDefault();

    const todo = {
        id: Date.now(),
        text: input.value
    }

    todos.push(todo);
    addItem(todo);
    save();
    input.value = '';
};

form.addEventListener('submit', handler)


