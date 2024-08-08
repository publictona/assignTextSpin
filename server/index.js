const express = require('express');
const bodyParser = require('body-parser');
const synonyms = require('synonyms');
const cors = require('cors');

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// List of stop words
const stopWords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now'];

// API route to handle the text spinning
app.post('/api/spin', (req, res) => {
    const inputText = req.body.text;
    const words = inputText.split(' ');
    const spunWords = words.map(word => {
        if (stopWords.includes(word.toLowerCase()) || word.length <= 3) {
            return word;
        }
        const synonymList = synonyms(word);
        if (synonymList) {
            const randomIndex = Math.floor(Math.random() * synonymList.length);
            return synonymList[randomIndex];
        }
        return word;
    });

    const spunText = spunWords.join(' ');
    res.json({ original: inputText, spun: spunText });
});

app.listen(port, () => {
    console.log(`Text spinner app listening at http://localhost:${port}`);
});
