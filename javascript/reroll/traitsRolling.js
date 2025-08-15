// Html Elements

const rerollButton = document.getElementById("trait-reroll-button")
const traitResultElm = document.getElementById("trait-result")
const traitWrapperElm = document.getElementById("trait-result-wrapper")
const traitDescElm = document.getElementById("trait-description")

const rerollCountElm = document.getElementById("reroll-count")
const pityDisplayElm = document.getElementById("pity-display")
const traitCountDisplayElm = document.getElementById("trait-count-display")
const traitHistoryDisplayElm = document.getElementById("trait-history-display")
const traitHistoryContainer = document.getElementById("trait-history-container")
const traitInfoSection = document.querySelector(".trait-info")

// State Variables
let traitHistory = []

let traitCount = {
  "Range": 0,
  "Swift": 0,
  "Vigor": 0,

  "Scholar": 0,
  "Marksman": 0,
  "Fortune": 0,
  "Blitz": 0,

  "Solar": 0,
  "Deadeye": 0,
  "Ethereal": 0,
  "Monarch": 0,
}

let traitPity = {
  "Solar": 0,
  "Deadeye": 0,
  "Ethereal": 0,
  "Monarch": 0
}

let rerollCount = 0
let isRerollOnCooldown = false

function formatDescription(description) {
  // Replace numbers (including negative) and percentages with span elements
  return description.replace(/([-+]?\d+%?)/g, '<span class="general-text buff">$1</span>');
}

function updatePity() {
  pityDisplayElm.innerHTML = `
    <div style="font-size: 18px; text-align: center;">
      <div style="margin-bottom: 5px; font-size: 20px;">Pity</div>
      <div class="pity-item">
        <img src="Images/Traits/Solar.webp" class="trait-small-icon">
        <span class="mythic text-gradient">Solar:</span> ${traitPity["Solar"]}/300
      </div>
      <div class="pity-item">
        <img src="Images/Traits/Deadeye.webp" class="trait-small-icon">
        <span class="mythic text-gradient">Deadeye:</span> ${traitPity["Deadeye"]}/400
      </div>
      <div class="pity-item">
        <img src="Images/Traits/Ethereal.webp" class="trait-small-icon">
        <span class="mythic text-gradient">Ethereal:</span> ${traitPity["Ethereal"]}/858
      </div>
      <div class="pity-item">
        <img src="Images/Traits/Monarch.webp" class="trait-small-icon">
        <span class="mythic text-gradient">Monarch:</span> ${traitPity["Monarch"]}/1500
      </div>
    </div>
  `;
}

function updateTraitCount() {
  traitCountDisplayElm.innerHTML = `
    <div style="font-size: 18px; text-align: center;">
      <div style="margin-bottom: 5px; font-size: 20px;">Traits</div>
      <div class="trait-count-grid">
        <div class="trait-count-column">
          <div class="pity-item tooltip" data-popup="Chance: 26%">
            <img src="Images/Traits/Range.webp" class="trait-small-icon">
            <span class="unbound">Range:</span> ${traitCount["Range"]}
          </div>
          <div class="pity-item tooltip" data-popup="Chance: 26%">
            <img src="Images/Traits/Swift.webp" class="trait-small-icon">
            <span class="water">Swift:</span> ${traitCount["Swift"]}
          </div>
          <div class="pity-item tooltip" data-popup="Chance: 26%">
            <img src="Images/Traits/Vigor.webp" class="trait-small-icon">
            <span class="cosmic">Vigor:</span> ${traitCount["Vigor"]}
          </div>
        </div>
        <div class="trait-count-column">
          <div class="pity-item tooltip" data-popup="Chance: 10%">
            <img src="Images/Traits/Scholar.webp" class="trait-small-icon">
            <span class="legendary text-gradient">Scholar:</span> ${traitCount["Scholar"]}
          </div>
          <div class="pity-item tooltip" data-popup="Chance: 6.5%">
            <img src="Images/Traits/Marksman.webp" class="trait-small-icon">
            <span class="legendary text-gradient">Marksman:</span> ${traitCount["Marksman"]}
          </div>
          <div class="pity-item tooltip" data-popup="Chance: 2.5%">
            <img src="Images/Traits/Fortune.webp" class="trait-small-icon">
            <span class="legendary text-gradient">Fortune:</span> ${traitCount["Fortune"]}
          </div>
          <div class="pity-item tooltip" data-popup="Chance: 1.85%">
            <img src="Images/Traits/Blitz.webp" class="trait-small-icon">
            <span class="legendary text-gradient">Blitz:</span> ${traitCount["Blitz"]}
          </div>
        </div>
        <div class="trait-count-column">
          <div class="pity-item tooltip" data-popup="Chance: 0.5%">
            <img src="Images/Traits/Solar.webp" class="trait-small-icon">
            <span class="mythic text-gradient">Solar:</span> ${traitCount["Solar"]}
          </div>
          <div class="pity-item tooltip" data-popup="Chance: 0.375%">
            <img src="Images/Traits/Deadeye.webp" class="trait-small-icon">
            <span class="mythic text-gradient">Deadeye:</span> ${traitCount["Deadeye"]}
          </div>
          <div class="pity-item tooltip" data-popup="Chance: 0.175%">
            <img src="Images/Traits/Ethereal.webp" class="trait-small-icon">
            <span class="mythic text-gradient">Ethereal:</span> ${traitCount["Ethereal"]}
          </div>
          <div class="pity-item tooltip" data-popup="Chance: 0.1%">
            <img src="Images/Traits/Monarch.webp" class="trait-small-icon">
            <span class="mythic text-gradient">Monarch:</span> ${traitCount["Monarch"]}
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Reload tooltips after updating the HTML
  loadTooltips();
}

function updateTraitHistory() {
  traitHistoryDisplayElm.innerHTML = '';
  
  traitHistory.forEach((trait, index) => {
    const iconDiv = document.createElement('div');
    iconDiv.className = 'history-icon-wrapper';
    
    const icon = document.createElement('img');
    icon.src = `Images/Traits/${trait}.webp`;
    icon.alt = trait;
    icon.className = 'history-icon';
    icon.title = `${trait} (#${traitHistory.length - index})`;
    
    iconDiv.appendChild(icon);
    traitHistoryDisplayElm.appendChild(iconDiv);
  });
  
  // Show placeholder if no history
  if (traitHistory.length === 0) {
    traitHistoryDisplayElm.innerHTML = '<div class="no-history">No traits rolled yet</div>';
  }
}

function rerollTraitOnce() {
  if (isRerollOnCooldown) return;

  rerollCount++;
  rerollCountElm.textContent = rerollCount + "/1";

  let result;
  for (trait in traitPity) {
    traitPity[trait] += 1

    if (traitPity["Solar"] >= 300) {
      result = "Solar"
    } else if (traitPity["Deadeye"] >= 400) {
      result = "Deadeye"
    } else if (traitPity["Ethereal"] >= 858) {
      result = "Ethereal"
    } else if (traitPity["Monarch"] >= 1500) {
      result = "Monarch"
    } else {
      result = rollFromTable(traitsChances)
    }
  }

  if (result == "Solar" || result == "Deadeye" || result == "Ethereal" || result == "Monarch") {
    traitPity[result] = 0;
  }

  updatePity()

  traitCount[result]++;
  
  // Add to history (most recent first)
  traitHistory.unshift(result);

  updateTraitCount();
  updateTraitHistory();

  // Apply color and animation
  traitResultElm.className = "general-text";
  traitWrapperElm.className = "trait-result-wrapper";

  const traitData = traitsChances.find(t => t.name === result);
  if (traitData) {
    const colorClass = traitData.color || traitData.gradient;
    if (colorClass) {
      traitWrapperElm.classList.add(colorClass);

      if (traitData.gradient) {
        traitResultElm.classList.add(colorClass);
      }
    }

    // Apply cooldown for mythic traits
    if (traitData.gradient === "mythic") {
      isRerollOnCooldown = true;
      rerollButton.disabled = true;
      rerollButton.style.opacity = "0.5";
      rerollButton.style.cursor = "not-allowed";

      setTimeout(() => {
        isRerollOnCooldown = false;
        rerollButton.disabled = false;
        rerollButton.style.opacity = "1";
        rerollButton.style.cursor = "pointer";
      }, 2000); // 2 second cooldown
    }
  }

  // Remove any existing trait icon
  const existingIcon = document.getElementById("trait-icon");
  if (existingIcon) {
    existingIcon.remove();
  }

  // Create and add trait icon if not "None"
  if (result !== "None") {
    const traitIcon = document.createElement("img");
    traitIcon.id = "trait-icon";
    traitIcon.className = "trait-icon";
    traitIcon.src = `Images/Traits/${result}.webp`;
    // Insert after the mask but before the result text
    traitWrapperElm.insertBefore(traitIcon, traitResultElm);
  }

  // Update description with formatted numbers
  if (traitData && traitData.description) {
    traitDescElm.innerHTML = formatDescription(traitData.description);
    traitDescElm.style.display = "block";
  } else {
    traitDescElm.innerHTML = "";
    traitDescElm.style.display = "none";
  }

  // Wrap text in span for bounce animation
  traitResultElm.innerHTML = `<span class="bounce-text">${result}</span>`;
}

rerollButton.addEventListener("click", () => {
  rerollTraitOnce();
})

// Handle responsive layout for trait history
function handleResponsiveLayout() {
  const subsection = document.querySelector(".subsection");
  
  if (window.innerWidth <= 1500) {
    // Move trait history into trait info section
    if (traitHistoryContainer && !traitInfoSection.contains(traitHistoryContainer)) {
      traitInfoSection.appendChild(traitHistoryContainer);
    }
  } else {
    // Move trait history back to subsection
    if (traitHistoryContainer && traitInfoSection.contains(traitHistoryContainer)) {
      subsection.appendChild(traitHistoryContainer);
    }
  }
}

// Initialize pity display on page load
window.addEventListener("DOMContentLoaded", () => {
  updatePity();
  updateTraitCount();
  updateTraitHistory();
  
  // Handle responsive layout
  handleResponsiveLayout();
  
  // Initialize tooltips after all content is loaded
  setTimeout(() => {
    if (typeof loadTooltips === 'function') {
      loadTooltips();
    }
  }, 100);
});

// Listen for window resize
window.addEventListener('resize', handleResponsiveLayout);