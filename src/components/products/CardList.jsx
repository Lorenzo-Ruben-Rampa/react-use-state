import { useState } from "react";
import Card from "./Card"

const CardList = ({ languages, onLanguageSelect }) => {

  const [selectedLanguageId, setSelectedLanguageId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedLanguageId(id);
    const selectedLanguage = languages.find((language) => language.id === id);
    onLanguageSelect(selectedLanguage);
  };


  return (
    <div className="container">
      {languages.map((language) => (
        <Card
          key={language.id}
          title={language.title}
          onClick={() => handleCardClick(language.id)}
          isSelected={selectedLanguageId === language.id}
        />
      ))}
    </div>
  );

};

export default CardList;  