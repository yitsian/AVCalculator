/**
 * @param {keyof HTMLElementTagNameMap} type - The tag name, e.g., 'div'
 * @param {string} classname - The CSS class to apply
 * @param {HTMLElement} parent - The parent element to append to
 * @returns {HTMLElement} The created element
 */

function createElement(type, classname, parent) {
  const element = document.createElement(type);
  element.className = classname;
  parent.appendChild(element)

  return element
}