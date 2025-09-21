const SMALL_SCREEN_SIZE = 1000

const tlUnitClassesElm = document.getElementById("tl-unit-classes")

const metaDividerElm = document.getElementById("tl-meta-divider")
const subMetaDividerElm = document.getElementById("tl-sub-meta-divider")
const usableDividerElm = document.getElementById("tl-usable-divider")
const outdatedDividerElm = document.getElementById("tl-outdated-divider")

function handleDividers(isSmallScreen) {
  tlUnitClassesElm.innerHTML = `
    ${isSmallScreen ? "" :
      `
      <div class="tl-classes-divider"></div>

      <div class="tl-unit-class-name1 carry tooltip" data-popup="Primary damage dealers that usually have good early defend and large final Aoes."><img src="Images/Icons/Dmg_Icon.webp"
          class="tl-unit-class-icon"></img>Carry</div>
      <div class="tl-unit-class-name2 subDamage tooltip" data-popup="Secondary damage units that require more investment or specialize in specific scenerios."><img src="Images/Icons/Dps_icon.webp"
          class="tl-unit-class-icon"></img>Sub-Damage</div>
      <div class="tl-unit-class-name1 support tooltip" data-popup="Units that provide debuffs or crowd control."><img src="Images/Icons/Repulse.webp"
          class="tl-unit-class-icon"></img>Support</div>
      <div class="tl-unit-class-name2 utility tooltip" data-popup="Buffers and units that are useful in specific stages / strategies."><img src="Images/Icons/Utility.webp"
          class="tl-unit-class-icon"></img>Utility</div>
    `
    }
  `

  // Load tooltips after updating the content
  if (!isSmallScreen) {
    setTimeout(loadTooltips, 0);
  }

  metaDividerElm.innerHTML = `
    ${isSmallScreen ? "" : `<div class="tl-classes-divider"></div>`}

    <div class="tl-tier-divider-line secret"></div>

    <div class="tl-tier-divider-text secret text-gradient">[Meta]</div>

    <div class="tl-tier-divider-line secret"></div>
  `
  subMetaDividerElm.innerHTML = `
    ${isSmallScreen ? "" : `<div class="tl-classes-divider"></div>`}

    <div class="tl-tier-divider-line mythic"></div>

    <div class="tl-tier-divider-text mythic text-gradient">[Sub-Meta]</div>

    <div class="tl-tier-divider-line mythic"></div>
      
  `

  usableDividerElm.innerHTML = `
    ${isSmallScreen ? "" : `<div class="tl-classes-divider"></div>`}

    <div class="tl-tier-divider-line epic"></div>

    <div class="tl-tier-divider-text epic text-gradient">[Usable]</div>

    <div class="tl-tier-divider-line epic"></div>
  `

  outdatedDividerElm.innerHTML = `
    ${isSmallScreen ? "" : `<div class="tl-classes-divider"></div>`}

    <div class="tl-tier-divider-line rare"></div>

    <div class="tl-tier-divider-text rare text-gradient">[Outdated]</div>

    <div class="tl-tier-divider-line rare"></div>
  `
}

function resizeTierlist() {
  handleDividers(window.innerWidth <= SMALL_SCREEN_SIZE)
  createListElements(optimalRankings, window.innerWidth <= SMALL_SCREEN_SIZE);
}

window.addEventListener('resize', resizeTierlist)
window.addEventListener('DOMContentLoaded', resizeTierlist)

function loadTierList(isSmallScreen) {
  // Reload based on selected rankings
  switch (selectedRankings) {
    case "Optimal": {
      createListElements(optimalRankings, isSmallScreen);
      break;
    }
  }

  /* Load Screen Size Dividers*/
  handleDividers(isSmallScreen)

  // console.log('Tierlist reloaded with filters:', {
  //   elements: elementFilters,
  //   obtainability: obtainabilityFilters,
  //   aoes: aoesFilter,
  //   search: searchBar?.value || ''
  // });
}

// Initial load
loadTierList(window.innerWidth <= SMALL_SCREEN_SIZE);