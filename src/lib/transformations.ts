
export const magicNames = [
  "Cute Owl Plushie",
  "Sparkling Star Wand",
  "Pink Potion of Joy",
  "Golden Snitch Charm",
  "Mini Cauldron Mug",
  "Hogwarts Letter Wallet",
  "Magic Spell Stickers",
  "Dreamy Crystal Ball",
  "Witch's Aesthetic Hat",
  "Floating Feather Pen",
  "Midnight Cat Pin",
  "Galaxy Slime Potion",
  "Rainbow Phoenix Keyring",
  "Fluffy Monster Notebook",
  "Starry Night Robe"
];

export const magicDescriptions = [
  "A super cute and soft companion for your magical journey.",
  "Spreads sparkles and happiness whenever you give it a wave!",
  "Smells like strawberries and makes you feel like you're floating on clouds.",
  "A tiny, shiny friend that follows you everywhere you go.",
  "Perfect for your morning hot chocolate or pumpkin juice.",
  "Carry your chocolate frog cards in style with this cute wallet.",
  "Decorate your spellbook with these adorable magical creatures.",
  "Shows you your happiest memories in beautiful pastel colors."
];

export const magicImages = [
  "https://images.unsplash.com/photo-1544030109-221244b07b9a", 
  "https://images.unsplash.com/photo-1534447677768-be436bb09401", 
  "https://images.unsplash.com/photo-1519681393784-d120267933ba", 
  "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17", 
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853", 
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc", 
  "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38", 
  "https://images.unsplash.com/photo-1515405290399-ed3ee296d68d", 
  "https://images.unsplash.com/photo-1520110120385-c285d6b09c74" 
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
