function getElementIcon(element) {
  element = element.toLowerCase()

  let folderPath = "Images/Elements/"

  switch (element) {
    case "spark":
      return folderPath + "Spark.webp";
    case "nature":
      return folderPath + "Nature.webp";
    case "water":
      return folderPath + "Water.webp";
    case "fire":
      return folderPath + "Fire.webp";
    case "holy":
      return folderPath + "Holy.webp";
    case "passion":
      return folderPath + "Passion.webp";
    case "curse":
      return folderPath + "Curse.webp";
    case "blast":
      return folderPath + "Blast.webp";
    case "cosmic":
      return folderPath + "Cosmic.webp";
    case "unbound":
      return folderPath + "Unbound.webp";
    case "unknown":
      return folderPath + "Unknown.webp";
    default:
      return folderPath + "All.webp";
  }
}

function getUnitPicture(unitName) {
  let folderPath = "Images/Units/"
  return folderPath + unitName + ".webp" 
}