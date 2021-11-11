const delegationDiv = document.querySelector('.delegation');
const createBut = document.querySelector('.create');
createBut.addEventListener('click', e => {
  const newBut = document.createElement('button');
  newBut.textContent = 'New';
  delegationDiv.append(newBut);
});

delegationDiv.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
      e.target.textContent = 'Done';
      e.target.disabled = true;
  }
});
