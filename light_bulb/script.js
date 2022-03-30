function lightBtn(match) {
  let pic;
  for (let i = 1; i <= 5; i++) {
    if (match === 0) {
      pic = 'light_off.png';
    } else {
      pic = 'light_on.png';
    }

    let light = document.getElementById('light' + i);
    light.src = pic;
  }
}
