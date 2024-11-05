import React, { useEffect, useState } from "react";
import axios from "axios";

function Translate({ language, text }) {
  const [translated, setTranslated] = useState('');
 
  const NewTranslation = async (text, language) => {
      if(!text || !language)
        return

      try {
        const response = await axios.post('http://localhost:3000/translate', {
          text: text,
          lang: language,
        });
        setTranslated(response.data.translatedText[0].translation);
      } catch (error) {
          console.error('Translation error:', error);
      }
  }

  useEffect(() => {
    if (text && language) {
      NewTranslation(text, language);
    }
  }, [text, language]); // Dependencies are text and language, so translation will trigger on change


  return (
    <div className="translate">
      <label className="label">Output</label>
      <h1 className="title">{translated}</h1>

    </div>
  );
}


export default Translate;
