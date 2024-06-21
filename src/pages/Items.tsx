import React, { useEffect, useState } from "react";

interface Item {
  name: string;
  image: {
    full: string;
  };
  tags: string[];
}

const Items: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [filterName, setFilterName] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/latest/data/es_ES/item.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const itemData = await response.json();
        const itemsArray: Item[] = Object.values(itemData.data);
        setItems(itemsArray);
        setFilteredItems(itemsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [items, filterName]);

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) =>
        selectedTags.every((tag) => item.tags.includes(tag))
      );
      setFilteredItems(filtered);
    }
  }, [items, selectedTags]);

  const handleFilterTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const seenItems = new Set<string>();
  const uniqueFilteredItems = filteredItems.filter((item) => {
    if (seenItems.has(item.name)) {
      return false;
    }
    seenItems.add(item.name);
    return true;
  });

  return (
    <div className="Items-container">
      <h1 className="Item-h1">Lista de Items</h1>
      <input
        type="text"
        placeholder="Filtrar por nombre..."
        className="input"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      <div className="Filter-buttons">
        {[
          "Boots",
          "HealthRegen",
          "Health",
          "ManaRegen",
          "Mana",
          "Armor",
          "SpellBlock",
          "SpellDamage",
          "Damage",
          "CriticalStrike",
          "AttackSpeed",
          "LifeSteal",
          "SpellVamp",
          "Jungle",
          "Lane",
          "OnHit",
          "Trinket",
          "Active",
          "Consumable",
          "CooldownReduction",
          "ArmorPenetration",
          "AbilityHaste",
          "Stealth",
          "Vision",
          "NonbootsMovement",
          "Tenacity",
          "MagicPenetration",
          "Aura",
          "Slow",
          "GoldPer",
          "MagicResist",
        ].map((tag, index) => (
          <button
            key={index}
            className={selectedTags.includes(tag) ? "active" : ""}
            onClick={() => handleFilterTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="Items-list">
        {uniqueFilteredItems.map((item, index) => (
          <div className="Item-card" key={index}>
            <img
              src={`https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/latest/img/item/${item.image.full}`}
              alt={item.name}
            />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
