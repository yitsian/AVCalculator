let currentTagFilters = {
  availability: [],
  rarities: [],
  elements: [],
  aoes: [],
  mechanics: []
};

function matchesFilters(unit) {
  for (const category in currentTagFilters) {
    const selectedTags = currentTagFilters[category].map(tag => tag.toLowerCase());
    if (selectedTags.length === 0) continue;

    const unitTags = (unit[category] || []).map(tag => tag.toLowerCase());
    const hasMatch = selectedTags.some(tag => unitTags.includes(tag));
    if (!hasMatch) return false;
  }
  return true;
}

function renderButtons() {
  const unitContainer = document.getElementById("units-catalog");
  unitContainer.innerHTML = "";

  const units = Object.entries(unitTagData).map(([name, tags]) => ({ name, ...tags }));

  let filtered = units.filter(matchesFilters);

  const searchValue = document.getElementById("search-input").value.toLowerCase().trim();
  if (searchValue) {
    filtered = filtered.filter(unit =>
      unit.name.toLowerCase().includes(searchValue)
    );
  }

  const sortType = document.getElementById("sort-type").value;
  const sortOrder = document.getElementById("sort-order").value;

  filtered.sort((a, b) => {
    let valA, valB;

    switch (sortType) {
      case "name":
        valA = a.name.toLowerCase();
        valB = b.name.toLowerCase();
        break;
      case "rarity":
        valA = rarityOrder.indexOf((a.rarities[0] || "").toLowerCase());
        valB = rarityOrder.indexOf((b.rarities[0] || "").toLowerCase());
        break;
      case "element":
        valA = a?.elements?.[0]?.toLowerCase() ?? "";
        valB = b?.elements?.[0]?.toLowerCase() ?? "";
        break;
      case "cost":
        valA = unitStats[a?.name]?.maxCost ?? "";
        valB = unitStats[b?.name]?.maxCost ?? "";
      break;
    }

    const ascending = sortOrder.toLowerCase() === "ascending";

    if (valA < valB) return ascending ? -1 : 1;
    if (valA > valB) return ascending ? 1 : -1;
    return 0;
  });

  for (const unit of filtered) {
    let rarityTag = unit.rarities[(unit.rarities.length - 1)].toLowerCase()

    // Create the button wrapper
    const btn = document.createElement("button");
    btn.className = "unit-button";
    btn.onclick = () => {
      selectUnit(unit.name);
    }
    unitContainer.appendChild(btn);

    btn.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      localStorage.setItem("selectedUnit", JSON.stringify(unit.name));
      window.open("calculator.html")
    });

    // Outer gradient border frame
    const btnGradient = document.createElement("div");
    btnGradient.className = "unit-gradient " + rarityTag;
    btn.appendChild(btnGradient);

    const btnTexture = document.createElement("img");
    btnTexture.src = "Images/Icons/Dots.webp"
    btnTexture.className = "unit-gradient-texture";
    btnGradient.appendChild(btnTexture);

    // Inner white content box (with unit image inside)
    const btnContent = document.createElement("div");
    btnContent.className = "unit-content";
    btnGradient.appendChild(btnContent);

    // Image
    const image = document.createElement("img");
    image.src = getUnitPicture(unit.name);
    image.className = "unit-picture";
    btnContent.appendChild(image);

    const unitElement = document.createElement("img")
    unitElement.src = getElementIcon(unit.elements[0])
    unitElement.className = "unit-element"
    btnContent.appendChild(unitElement)

    const unitName = document.createElement("div")
    unitName.className = "unit-name general-text"

    if (sortType == "cost") {
      unitName.innerHTML = '<span class="text-gradient money">' + (unitStats[unit.name]?.maxCost ?? -1) + " ¥" + '</span>'
    } else {
      unitName.textContent = unit.name
    }
    btnContent.appendChild(unitName)
  }
}

function toggleTagVisual(tag) {
  let desiredTag = document.getElementById(tag)

  desiredTag.classList.toggle("button-hover")
  desiredTag.classList.toggle("selected-tag")

  console.log(currentTagFilters)
}

function toggleTag(category, tag) {
  const index = currentTagFilters[category].indexOf(tag);
  if (index >= 0) {
    currentTagFilters[category].splice(index, 1); // remove tag
  } else {
    currentTagFilters[category].push(tag); // add tag
  }

  toggleTagVisual(tag)
  renderButtons();
}

window.addEventListener("DOMContentLoaded", renderButtons);

document.getElementById("search-input").addEventListener("input", renderButtons);
document.getElementById("sort-type").addEventListener("change", renderButtons);
document.getElementById("sort-order").addEventListener("change", renderButtons);