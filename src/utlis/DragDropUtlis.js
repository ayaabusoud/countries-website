const ELEMENT_HOVER = "hovered";
let draggedElement;

export function startDrag(e, id) {
    e.target.style.opacity = '0.5';
    draggedElement = e.target.getAttribute(id);
}

export function endDrag(element) {
    element.style.opacity = '1';
}

export function dragEnter(element) {
    element.classList.add(ELEMENT_HOVER);
}

export function dragLeave(e) {
    let isLeaving = !e.currentTarget.contains(e.relatedTarget);

    if (isLeaving) {
        e.currentTarget.classList.remove(ELEMENT_HOVER);
    }
}

export function dropElement(e, addItem) {
    e.currentTarget.classList.remove(ELEMENT_HOVER);
    e.preventDefault();
    addItem(draggedElement);
}