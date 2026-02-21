
/**
 * TRANSFORMASI TAMPILAN SAJA
 * Helper untuk mengubah data asli dari dummyjson menjadi item dunia sihir
 */

export const magicNames = [
  "Elder Wand Replica",
  "Phoenix Feather Wand",
  "Dragon Heartstring Wand",
  "Invisibility Cloak",
  "Time Turner",
  "Marauder's Map",
  "Advanced Potion-Making Book",
  "Polyjuice Potion Kit",
  "Golden Snitch Replica",
  "Gryffindor House Robe",
  "Slytherin House Robe",
  "Ravenclaw House Robe",
  "Hufflepuff House Robe",
  "Nimbus 2000 Broomstick",
  "Firebolt Racing Broom",
  "Monster Book of Monsters",
  "Quick-Quotes Quill",
  "Remembrall",
  "Omnioculars",
  "Wizard's Chess Set",
  "Chocolate Frog",
  "Bertie Bott's Every Flavor Beans",
  "Butterbeer Mug",
  "Pensieve Crystal Bowl",
  "Deluminator",
  "Sorting Hat Replica",
  "Hogwarts Trunk",
  "Triwizard Trophy",
  "Howler Stationery",
  "Dobby's Sock Collection"
];

export const magicDescriptions = [
  "Crafted in Ollivanders with ancient magical techniques.",
  "A legendary artifact from the forbidden halls of Hogwarts.",
  "Rare magical equipment approved by the Ministry of Magic.",
  "Used by famous wizards to traverse the halls unseen.",
  "Harness the power of chronomancy with this rare device.",
  "A masterpiece of cartography showing every secret passage.",
  "Contains the most guarded secrets of the potions master.",
  "Essential for those who wish to walk in someone else's skin.",
  "The fastest ball in Quidditch, captured for your collection.",
  "Worn by the bravest of heart at the Gryffindor common room."
];

export const magicImages = [
  "https://images.unsplash.com/photo-1551269901-5c5e14c25df7", // Magic ball
  "https://images.unsplash.com/photo-1590184014761-86555b9ba750", // Books
  "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a", // Old paper
  "https://images.unsplash.com/photo-1509248961158-e54f6934749c", // Potion
  "https://images.unsplash.com/photo-1481162853330-03e352fc8773", // Castle
  "https://images.unsplash.com/photo-1534447677768-be436bb09401", // Abstract magic
  "https://images.unsplash.com/photo-1517462964521-f002f23bb10f", // Old library
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26", // Movie magic
  "https://images.unsplash.com/photo-1520110120385-c285d6b09c74", // Gold textures
  "https://images.unsplash.com/photo-1523480717984-24cba35ae1ee"  // Mystery
];

export const getMagicalData = (id: number) => {
  const index = id % magicNames.length;
  const descIndex = id % magicDescriptions.length;
  const imgIndex = id % magicImages.length;
  
  return {
    title: magicNames[index],
    description: magicDescriptions[descIndex],
    image: `${magicImages[imgIndex]}?auto=format&fit=crop&w=800&q=80`
  };
};
