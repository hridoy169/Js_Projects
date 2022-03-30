const hexaNumber = document.getElementById('hexaNumber');
const color = document.getElementById('color');

color.addEventListener('input', () => {
  const InputColor = color.value;
  hexaNumber.value = InputColor;

  document.body.style.backgroundColor = InputColor;
});
