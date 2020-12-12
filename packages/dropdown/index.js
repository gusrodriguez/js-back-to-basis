const loadDropdown = () => {
  const dropdownOptions = document.getElementsByClassName('dropdown-option');
  Array.prototype.forEach.call(dropdownOptions, option => {
    option.addEventListener('click', () => {
      selectOption(option);
      close();
    })
  })
}

const toggleDropdown = () => {
  const dropdown = document.getElementsByClassName('dropdown-container')[0];
  if (dropdown.classList.contains('hide') || dropdown.classList.contains('hideWithAnimation')) {
    dropdown.classList.remove('hide');
    dropdown.classList.remove('hideWithAnimation');
  } else {
    closeWithAnimation(dropdown);
  }
}

const selectOption = option => {
  const selectedOption = document.getElementsByClassName('selected-option')[0];
  const newOptionText = option.innerHTML;
  selectedOption.innerHTML = newOptionText;
  selectedOption.setAttribute('data-value', newOptionText);
}

const closeWithAnimation = (dropdown) => {
  dropdown.classList.add('hideWithAnimation');
}

const close = () => {
  const dropdown = document.getElementsByClassName('dropdown-container')[0];
  dropdown.classList.add('hide');
}
