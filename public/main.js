const gallery = document.getElementById('gallery');
const images = gallery.querySelectorAll('.gallery__image img');

gallery.addEventListener('click', handleClick);

function handleClick(e) {
  const element = e.target;

  const isNameAlreadyPresent = element.parentElement.querySelector('.gallery__image--message');
  if (isNameAlreadyPresent) {
    isNameAlreadyPresent.remove();
  } else {
    const name = element.getAttribute('alt');
    renderCelebrityName(element.parentElement, name);
  }
}

function renderCelebrityName(parentElement, name) {
  const message = document.createElement('div');
  message.className = 'gallery__image--message';
  message.innerText = name;
  parentElement.append(message);
}