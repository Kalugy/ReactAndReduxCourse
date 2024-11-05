const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const translator = require("open-google-translator");
const cors = require('cors');

translator.supportedLanguages();

app.use(cors()); // Allow all origins
app.use(express.json());


// GET endpoint to receive text and language, then return translated text
app.post('/translate', async (req, res) => {
    const { text, lang } = req.body;


    // Check if both text and lang are provided
    if (!text || !lang) {
        return res.status(400).json({ error: 'Text and lang parameters are required' });
    }

    try {
        // Call the Open Google Translator API
        translator
            .TranslateLanguageData({
                listOfWordsToTranslate: [text],
                toLanguage: lang,
            })
            .then((data) => {
                console.log(data);
                res.json({ translatedText: data });
            });

        // Return the translated text
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Translation failed' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
