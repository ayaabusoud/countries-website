// CSS class name for elements when hovered.
const ELEMENT_HOVER = "hovered";

// Variable to store the dragged element.
let draggedElement;

/**
 * Initiates the drag operation by setting the opacity and storing the dragged element's ID.
 * 
 * @param {Event} e - The drag start event.
 * @param {string} id - The ID attribute of the element being dragged.
 */
export function startDrag(e, id) {
    e.target.style.opacity = '0.5';
    draggedElement = e.target.getAttribute(id);
}

/**
 * Ends the drag operation by resetting the opacity of the element.
 * 
 * @param {HTMLElement} element - The dragged element.
 */
export function endDrag(element) {
    element.style.opacity = '1';
}

/**
 * Handles the drag enter event by adding the hover class to the element.
 * 
 * @param {HTMLElement} element - The element being hovered.
 */
export function dragEnter(element) {
    element.classList.add(ELEMENT_HOVER);
}

/**
 * Handles the drag leave event by removing the hover class from the element.
 * 
 * @param {Event} e - The drag leave event.
 */
export function dragLeave(e) {
    // Check if the mouse is leaving the element's bounds
    let isLeaving = !e.currentTarget.contains(e.relatedTarget);

    if (isLeaving) {
        e.currentTarget.classList.remove(ELEMENT_HOVER);
    }
}

/**
 * Handles the drop event by removing the hover class and adding the dragged element to the dropped section.
 * 
 * @param {Event} e - The drop event.
 * @param {function} addItem - The function that adds the dragged item.
 */
export function dropElement(e, addItem) {
    e.currentTarget.classList.remove(ELEMENT_HOVER);
    e.preventDefault();
    addItem(draggedElement);
}
