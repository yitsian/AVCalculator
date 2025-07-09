function navigateTo(page) {
  window.location.href = page;
}

function navigate(page) {
  return () => window.location.href = page
}

function selectUnit(unit) {
  localStorage.setItem("selectedUnit", JSON.stringify(unit));
  window.location.href = "calculator.html";
}