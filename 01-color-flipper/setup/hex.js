const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');

const getColorName = (colorValue) => {
  // Remove the # from the string so it can be passed to the api endpoint
  colorValue = colorValue.slice(1);

  axios
    .get(`https://www.thecolorapi.com/id?hex=${colorValue}`)
    .then((res) => {
      colorValue = res.data.name.value;
      setColorName(colorValue);
    })
    .catch((err) => {
      console.log(err);
    });
};

const setColorName = (name) => {
  document.querySelector('.colorName').textContent = name;
};

btn.addEventListener('click', function () {
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  getColorName(hexColor);

  document.querySelector('.color').textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
