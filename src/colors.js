export default function colorPallete(){
    const colors = [
  "#3B3B98", // Deep Indigo
  "#1B1464", // Midnight Blue
  "#0A3D62", // Navy Teal
  "#1E272E", // Dark Charcoal
  "#2F3640", // Gunmetal
  "#3D3D3D", // Dim Gray
  "#2C3A47", // Outer Space Gray
  "#4B4B4B", // Graphite
  "#222F3E", // Dark Slate
  "#2C2C54", // Eggplant

  "#5758BB", // Blue Grape
  "#3C40C6", // Indigo Blue
  "#40407A", // Dark Periwinkle
  "#2C3A47", // Shadow
  "#2E4053", // Navy Steel
  "#1C1C1C", // Jet Black
  "#2F3542", // Night Gray
  "#3742FA", // Royal Blue
  "#353B48", // Granite
  "#192A56", // Deep Sea

  "#6F1E51", // Deep Plum
  "#833471", // Purple Velvet
  "#B33771", // Dark Pink
  "#3E4A59", // Slate Gray
  "#34495E", // Wet Asphalt
  "#4A235A", // Rich Violet
  "#5D6D7E", // Cool Gray
  "#6C3483", // Royal Purple
  "#5B2C6F", // Midnight Purple
  "#7D3C98"  // Dark Orchid
];

    const randomcolor = Math.floor(Math.random() * colors.length);
    return colors[randomcolor];

}