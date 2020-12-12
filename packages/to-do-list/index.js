const addList = () => {
  const newList = createList();
  document.getElementById('list-body').append(newList);
}

const addCard = (id, newList) => {
  const cardId = document.querySelectorAll(`[id*="list-${id}--"]`).length;
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.id = `list-${id}--card_${cardId}`;
  newCard.innerHTML = `list-${id}--card_${cardId}`;
  newCard.draggable = true;
  newCard.ondragstart = e => {
    e.dataTransfer.setData('draggedElement', e.target.id)
    e.dataTransfer.setData('draggedParent', e.target.parentElement.id)
  };
  newCard.ondrop = e => e.preventDefault();
  newList.append(newCard);
}

const getNewCardButton = (id, newList) => {
  const newButton = document.createElement('button');
  newButton.innerHTML = 'Add card';
  newButton.onclick = () => { addCard(id, newList) };
  return newButton;
}

const getRemoveList = (id, newList) => {
  const newButton = document.createElement('button');
  newButton.innerHTML = 'Delete List';
  newButton.onclick = () => {
    newList.remove();
  };
  return newButton;
}

const createList = () => {
  const newId = document.getElementsByClassName('list').length;
  const newList = document.createElement('div');
  newList.classList.add('list');
  newList.id = `list-${newId}`;
  newList.setAttribute('data-allow-drop', true);
  newList.append(getRemoveList(newId, newList));
  newList.append(getNewCardButton(newId, newList));
  newList.ondragover = e => {
    e.preventDefault();
  };
  newList.ondrop = e => {
    e.preventDefault();
    const srcElementId = e.dataTransfer.getData('draggedElement');
    const draggedParent = e.dataTransfer.getData('draggedParent');
    if (draggedParent !== e.target.id && !!e.target.getAttribute('data-allow-drop')) {
      e.target.append(document.getElementById(srcElementId));
    } else if(draggedParent === e.target.id) {
      const nextElement = document.elementFromPoint(e.x, e.y + 50);
      if (nextElement.classList.contains('card')) {
        e.target.insertBefore(document.getElementById(srcElementId), nextElement);
      } else {
        e.target.append(document.getElementById(srcElementId));
      }
    }
  };
  return newList;
}
