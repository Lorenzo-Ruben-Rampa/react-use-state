import { useState } from 'react';
import CardList from "./products/CardList.jsx";

export default function Main({ languages }) {


    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <main>
            < CardList languages={languages} onLanguageSelect={handleLanguageSelect} />
            <div className="container">
                {selectedLanguage && (
                    <div className="accordion">
                        <div className="accordion__title">
                            <h3>{selectedLanguage.title}</h3>
                            <p>{selectedLanguage.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}