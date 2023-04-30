const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const delItem = (event) => {
    const target = event.target.parentElement;
    target.remove();

}
const addItem = (text) => {
    
 if (text == ''){
        alert('내용을 입력해 주세요!');
     }

 else if (text !== ''){
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');
        const checkBox = document.createElement('input');
        checkBox.setAttribute("type", 'checkbox');
        checkBox.setAttribute("class", "checkbox");
        button.innerText = 'Delete';
        span.innerText = text;
        button.addEventListener('click', delItem);
        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);
};

const handler = (event) => {
    event.preventDefault();
    addItem(input.value);
    input.value = '';
};

form.addEventListener('submit', handler)


