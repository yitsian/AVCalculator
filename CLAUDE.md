# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Anime Vanguards DPS Calculator web application built with vanilla HTML, CSS, and JavaScript. The application is a static site with no build process or package manager.

## Development Commands

### Running the Application
Since this is a static HTML site, there are no build commands. To develop:
1. Open the HTML files directly in a web browser
2. Use a local web server (e.g., `python -m http.server` or VS Code's Live Server extension) to avoid CORS issues with local file access

### Version Control
- Use `git status` to check file changes
- Use `git diff` to review changes before committing
- Follow existing commit message style (e.g., "v0.4 - tooltips and meter")

## Architecture

### Page Structure
The application consists of 4 main pages:
- `index.html` - Home page with update logs and credits
- `units.html` - Unit catalog with filtering and sorting
- `calculator.html` - DPS calculator with unit stats, buffs, and damage calculations
- `reroll.html` - Trait and stat rerolling simulator

### JavaScript Module Organization

#### Core Modules
- `javascript/pageHandler.js` - Navigation between pages
- `javascript/main.js` - Unit catalog functionality (search, filter, sort)
- `javascript/icons.js` - Icon path utilities
- `javascript/formatters.js` - Number and text formatting utilities

#### Calculator Modules
The calculator uses a modular structure:

**Data Files** (`javascript/calculator/`)
- `unitData/` - Unit stats, passives, attacks, and tag data
- `otherData/` - Familiar, buff, and element data
- `dependancies/` - Base and final stat calculations
- `units/` - Unit input handlers and modifiers
- `buffs/` - Buff creation and management
- `attacks/` - Attack calculations

**Module Loading Order** (as seen in calculator.html):
1. Unit data files
2. Other data files
3. Dependency calculations
4. Unit handlers
5. Buff handlers
6. Attack calculations

### Data Flow
1. User selects a unit from the catalog (`units.html`)
2. Unit selection is stored in localStorage
3. Calculator page reads the selection and loads unit data
4. Stats are calculated based on base stats, traits, ascensions, and buffs
5. Final DPS is calculated from attack patterns and modifiers

### Key Data Structures
- Units are identified by name (e.g., "Ichiga", "Vogita")
- Unit data includes stats, passives, attacks, and tags
- Buffs modify unit stats and can have stacking rules
- Familiars provide additional buffs and abilities

## Important Conventions
- All unit images are in `Images/Units/`
- Element/trait/ability icons have their own subdirectories
- CSS classes follow a pattern: element names for colors (e.g., "fire", "water")
- Rarity classes: "mythic", "legendary", "rare", etc.
- Use localStorage for passing data between pages