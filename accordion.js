let activeItem;
let openedClass = 'opened';

function switchItemState(e) {
  let element = e.target;
  if (!element.classList.contains('js-accordion-item')) return;

  element.classList.add(openedClass);

  if (!!activeItem) {
    activeItem.classList.remove(openedClass);
  }

  if (element === activeItem) {
    activeItem = null;

    return;
  }

  activeItem = element;
}

document.addEventListener('click', event => switchItemState(event));
