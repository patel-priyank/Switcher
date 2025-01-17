const checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));

const getRandomIndex = array => Math.floor(Math.random() * array.length);

const play = checkboxSwitch => {
  const currentCheckbox = checkboxes.find(checkbox => checkbox.closest('.switch') === checkboxSwitch);

  if (currentCheckbox.checked) {
    const checkedCheckboxes = checkboxes.filter(checkbox => checkbox.checked && checkbox !== currentCheckbox);
    const indexToUncheck = getRandomIndex(checkedCheckboxes);
    checkedCheckboxes[indexToUncheck].checked = false;
  } else {
    const uncheckedCheckboxes = checkboxes.filter(checkbox => !checkbox.checked && checkbox !== currentCheckbox);
    const indexToCheck = getRandomIndex(uncheckedCheckboxes);
    uncheckedCheckboxes[indexToCheck].checked = true;
  }
};

const uncheckedIndex = getRandomIndex(checkboxes);

checkboxes.forEach((checkbox, index) => {
  if (index !== uncheckedIndex) {
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', event => play(event.target.closest('.switch')));
});
