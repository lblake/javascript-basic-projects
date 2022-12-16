const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];

  document.querySelector('.color').textContent = colors[randomNumber];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
