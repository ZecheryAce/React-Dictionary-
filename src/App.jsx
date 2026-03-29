import React from "react";

import WordForm from "./components/WordForm/WordForm";
import CardsContainer from "./components/CardsContainer/CardsContainer";

import "./App.css";

class App extends React.Component {
  state = {
      words: [
        { front: "Translation", back: "Übersetzung" },
        { front: "Egg", back: "Ei" },
        { front: "Taxi", back: "Taxi" },
        { front: "Paper", back: "Papier" },
        { front: "Square", back: "Platz" },
        { front: "Seven", back: "Sieben" },
      ],
      score: 0
  }

  addWord = (front, back) => {
    const newWords = [...this.state.words, { front, back }];
    this.setState({ words: newWords });
  };
  deleteWord = (front) => {
    const newWords = this.state.words.filter(word => word.front !== front);
    this.setState({ words: newWords });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Dictionary App
        </header>
        <main>
          <WordForm 
            addWord={this.addWord} />
          <CardsContainer 
            words={this.state.words} 
            deleteWord={this.deleteWord} />
        </main>
      </div>
    );
  }
}

/*
function App2() {
  const [words, setWords] = useState([
    { front: "Translation", back: "Übersetzung" },
    { front: "Egg", back: "Ei" },
    { front: "Taxi", back: "Taxi" },
    { front: "Paper", back: "Papier" },
    { front: "Square", back: "Platz" },
    { front: "Seven", back: "Sieben" },
  ]);

  const addWord = (front, back) => {
    const newWords = [...words, { front, back }];
    setWords(newWords);
  };

  const deleteWord = (front) => {
    const newWords = words.filter((word) => word.front !== front);
    setWords(newWords);
  };
}
*/

export default App;
