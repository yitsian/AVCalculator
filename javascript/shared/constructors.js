function createElement(type, classname, parent) {
  const element = document.createElement(type);
  element.className = classname;
  parent.appendChild(element)

  return element
}