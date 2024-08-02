import React, { useState } from 'react';
import './App.css';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

function App() {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    const words = inputText.split(/\s+/);
    const firstIncorrectWord = words.find(word => customDictionary[word.toLowerCase()]);

    if (firstIncorrectWord) {
      setSuggestion(`Did you mean: ${customDictionary[firstIncorrectWord.toLowerCase()]}?`);
    } else {
      setSuggestion('');
    }
  };

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter Text..."
        rows="10"
        cols="50"
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default App;
