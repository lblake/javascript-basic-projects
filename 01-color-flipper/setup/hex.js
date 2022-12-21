// const {default: axios} = require('axios');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

axios
  .get(`https://www.thecolorapi.com/id?hex=0047AB`)
  .then((res) => {
    console.log(res);
    colorValue = res.data.name.value;
    console.log('This is the value', colorValue);
  })
  .catch((err) => {
    console.log(err);
  });

btn.addEventListener('click', function () {
  let hexColor = '';

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    console.log('This is the hex value', hexColor);
  }

  document.querySelector('.colorName').textContent = colorValue;
  document.body.style.backgroundColor = hexColor;
  document.querySelector('.color').textContent = '#' + hexColor;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
