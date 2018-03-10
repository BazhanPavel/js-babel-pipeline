'use strict'

let author = document.createElement('h4');
author.setAttribute('id', 'author');
author.setAttribute('title', 'GossJS');
author.textContent = 'Павел Бажан';
document.body.appendChild(author);

let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'in');
input.setAttribute('maxlength', '5');
document.body.appendChild(input);

let button = document.createElement('button');
button.setAttribute('id', 'btn');
button.textContent = 'Преобразовать';
document.body.appendChild(button);

const reverse = (x) => {
  return x.split('').reverse().join('');
}

const upTo10 = (x) => {
  while (x.length < 10) {
    x += '*';
  }
  return x;
}

document.querySelector('#btn').addEventListener('click', 
  () => {
    let text = document.getElementById('in').value;
    str.textContent = text.toUpperCase()
      |> upTo10 
      |> (x) => x + x
      |> reverse ;
  }
);

let str = document.createElement('div');
str.setAttribute('id', 'str');
document.body.appendChild(str);

