const copyText = document.getElementById('copyText');
const copyBtn = document.querySelector('.copyBtn');

// copy section
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(copyText.value);
});

// cut section]
const cutText = document.getElementById('cutText');
const cutBtn = document.querySelector('.cutBtn');

cutBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(cutText.value);
  cutText.value = '';
});

// paste section
const pasteText = document.getElementById('pasteText');
const pasteBtn = document.querySelector('.pasteBtn');

pasteBtn.addEventListener('click', () => {
  pasteText.value = '';
  navigator.clipboard.readText().then((text) => {
    pasteText.value = text;
  });
});
