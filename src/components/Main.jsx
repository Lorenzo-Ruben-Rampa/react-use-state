import { useState } from 'react';
import CardList from "./products/CardList.jsx";

export default function Main() {

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <main>
            <div className="container">
                < CardList onLanguageSelect={handleLanguageSelect} />
            </div>
            <div className="container">
                <div className="accordion">
                    <div className="accordion__title">
                        {selectedLanguage ? (
                            <>
                                <h3>{selectedLanguage.title}</h3>
                                <p>{selectedLanguage.description}</p>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
};