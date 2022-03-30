let count = 0;
const timer = setInterval(() => {
  count++;
  const result = (document.querySelector('.id1').textContent = count);
  if (count === 200) {
    clearInterval(timer);
  }
}, 10);

// client
let count2 = 0;
const client = setInterval(() => {
  count2++;
  const result1 = (document.querySelector('.id2').textContent = count2);
  if (count2 === 100) {
    clearInterval(client);
  }
}, 10);

// Achieve
let count3 = 0;
const achieve = setInterval(() => {
  count3++;
  const result2 = (document.querySelector('.id3').textContent = count3);
  if (count3 === 150) {
    clearInterval(achieve);
  }
}, 10);
