import Card from "./Card"

const CardList = ({ languages, onLanguageSelect }) => {

  return (
    <div>
      {languages.map((language) => (
        <Card
          key={language.id}
          title={language.title}
          onClick={() => onLanguageSelect(language)}
        />
      ))}
    </div>
  );

};

export default CardList;  