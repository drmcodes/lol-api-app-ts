import React, { useEffect, useState } from "react";
import "../App.css";
interface Rune {
  id: number;
  key: string;
  icon: string;
  name: string;
}

interface Slot {
  runes: Rune[];
}

interface Runes {
  id: number;
  key: string;
  icon: string;
  name: string;
  slots: Slot[];
}

const RunesComponent: React.FC = () => {
  const [runesData, setRunesData] = useState<Runes[]>([]);

  useEffect(() => {
    const fetchRunes = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/latest/data/es_ES/runesReforged.json"
        );

        if (!response.ok) {
          throw new Error("Error fetching runes");
        }

        const runeData: Runes[] = await response.json();
        setRunesData(runeData);
      } catch (error) {
        console.error("Error fetching runes:", error);
      }
    };

    fetchRunes();
  }, []);

  return (
    <div className="runes-container">
      {runesData.map((runeCategory) => (
        <div className="div-runas" key={runeCategory.id}>
          <h2 className="category-title">{runeCategory.name}</h2>
          <div className="runes-wrapper">
            {runeCategory.slots.map((slot, slotIndex) => (
              <div className="div-slot" key={slotIndex}>
                {slot.runes.map((rune, runeIndex) => (
                  <div
                    className={`div-id ${
                      runeIndex === 0 ? "main-rune" : "rest-rune"
                    }`}
                    key={rune.id}
                  >
                    <p>{rune.name}</p>
                    <img
                      src={`https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/img/${rune.icon}`}
                      alt={rune.name}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RunesComponent;
