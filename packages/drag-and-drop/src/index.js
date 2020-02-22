function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

  event.currentTarget.style.backgroundColor = '#eee';
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');

  const draggableElement = document.getElementById(id);
  const dropzone = event.target;

  dropzone.appendChild(draggableElement);

  event.dataTransfer.clearData();
}

function getRandomInteger() {
  return Math.floor(Math.random() * 10000);
}

function addTask() {
  const task = document.createElement('div');
  const id = getRandomInteger();
  task.setAttribute('draggable', 'true');
  task.setAttribute('id', id);
  task.setAttribute('class', 'card');
  
  task.addEventListener('dragstart', onDragStart);

  task.innerHTML = `Task-${id}`;
  const todoColumn = document.getElementById('todo-column');
  todoColumn.appendChild(task);
}