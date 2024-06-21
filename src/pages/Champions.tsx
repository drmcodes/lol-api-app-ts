import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Champion {
  id: string;
  key: string;
  name: string;
  tags: string[];
}

const Champions: React.FC = () => {
  const [champions, setChampions] = useState<{ [key: string]: Champion }>({});
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const [filteredChampions, setFilteredChampions] = useState<Champion[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tagStates, setTagStates] = useState<{ [key: string]: boolean }>({
    Fighter: false,
    Tank: false,
    Assassin: false,
    Mage: false,
    Marksman: false,
    Support: false,
  });

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/latest/data/es_ES/champion.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const championData = await response.json();
        setChampions(championData.data);

        const baseUrl =
          "https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/img/champion/loading/";
        const championNames = Object.keys(championData.data);

        for (const championName of championNames) {
          let imageUrl;
          if (championName === "Fiddlesticks") {
            imageUrl = `${baseUrl}FiddleSticks_0.jpg`;
          } else {
            const variations = [
              `${championName}_0.jpg`,
              `${championName.toLowerCase()}_0.jpg`,
              `${championName.charAt(0).toUpperCase()}${championName
                .slice(1)
                .toLowerCase()}_0.jpg`,
            ];

            for (let i = 0; i < variations.length; i++) {
              const response = await fetch(baseUrl + variations[i]);
              if (response.ok) {
                imageUrl = baseUrl + variations[i];
                break;
              }
            }
          }

          if (imageUrl) {
            setImages((prevImages) => ({
              ...prevImages,
              [championName]: imageUrl,
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchChampions();
  }, []);

  const handleFilterTag = (tag: string) => {
    setTagStates((prevTagStates) => ({
      ...prevTagStates,
      [tag]: !prevTagStates[tag],
    }));

    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredChampions(Object.values(champions));
    } else {
      const filtered = Object.values(champions).filter((champion) =>
        selectedTags.every((tag) => champion.tags.includes(tag))
      );
      setFilteredChampions(filtered);
    }
  }, [champions, selectedTags]);

  return (
    <div className="Champions-container">
      <nav className="Champions-nav">
        <button
          className={tagStates["Fighter"] ? "active" : ""}
          onClick={() => handleFilterTag("Fighter")}
        >
          Fighter
        </button>
        <button
          className={tagStates["Tank"] ? "active" : ""}
          onClick={() => handleFilterTag("Tank")}
        >
          Tank
        </button>
        <button
          className={tagStates["Assassin"] ? "active" : ""}
          onClick={() => handleFilterTag("Assassin")}
        >
          Assassin
        </button>
        <button
          className={tagStates["Mage"] ? "active" : ""}
          onClick={() => handleFilterTag("Mage")}
        >
          Mage
        </button>
        <button
          className={tagStates["Marksman"] ? "active" : ""}
          onClick={() => handleFilterTag("Marksman")}
        >
          Marksman
        </button>
        <button
          className={tagStates["Support"] ? "active" : ""}
          onClick={() => handleFilterTag("Support")}
        >
          Support
        </button>
      </nav>
      <div className="Champions-card">
        {filteredChampions.map((champion, index) => (
          <div className="Champions-p" key={index}>
            <div className="image-container">
              {!images[champion.id] ? (
                <Skeleton width={150} height={150} />
              ) : (
                <img
                  src={images[champion.id] || `default-image-url.jpg`}
                  alt={`${champion.name} loading screen`}
                />
              )}
              <div className="overlay-text">{champion.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Champions;
