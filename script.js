const messages = [
  'In life, you can have fast, cheap, or good — pick two.',
  'You can be successful, well-rested, or have a social life, but not all three.',
  'You can have love, career, or freedom — just not at the same time.',
  'You can focus on quality, quantity, or speed, but balancing all three is a myth.',
  "Money, time, or energy — you'll always be short on one.",
  "In relationships, you can have passion, stability, or peace. Two's the limit.",
  'You can chase ambition, maintain friendships, or find inner peace — two will always outweigh the third.',
  'You can be liked, honest, or successful — choose two.',
  "Time, attention, or results — there's only ever room for two.",
  'You can save money, save time, or save energy, but not all at once.',
  "Comfort, growth, or adventure — you'll always have to leave one behind.",
  'Health, wealth, or happiness — you can prioritize two, but the third will demand its due.',
  'You can be everything to everyone, true to yourself, or stress-free — pick two.',
  "You can get it done quickly, get it done well, or get it done cheap. Two's the max.",
  'You can chase your dream, stay in your comfort zone, or please everyone — never all three.',
  'You can have freedom, consistency, or security — but one will always slip away.',
  "Focus on work, relationships, or personal growth — you'll only ever fully succeed at two."
];

const checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));
const giveUpModal = document.querySelector('.give-up');
const messageModal = document.querySelector('.message');
const btnNo = document.querySelector('.btn-no');
const btnYes = document.querySelector('.btn-yes');

const getRandomIndex = array => Math.floor(Math.random() * array.length);

let changeCount = 0;

const play = checkboxSwitch => {
  changeCount++;

  if (changeCount === 10) {
    giveUpModal.classList.remove('hide');
  }

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

btnNo.addEventListener('click', () => {
  changeCount = 0;
  giveUpModal.classList.add('hide');
});

btnYes.addEventListener('click', () => {
  changeCount = 0;
  messageModal.textContent = messages[getRandomIndex(messages)];
  messageModal.classList.remove('hide');
  giveUpModal.classList.add('hide');
});
