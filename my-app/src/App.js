import './App.css';
import Choice2 from './Choice2';

function App() {



    const tarotCards = [
        "The Fool",
        "The Magician",
        "The High Priestess",
        "The Empress",
        "The Emperor",
        "The Hierophant",
        "The Lovers",
        "The Chariot",
        "Strength",
        "The Hermit",
        "Wheel of Fortune",
        "Justice",
        "The Hanged Man",
        "Death",
        "Temperance",
        "The Devil",
        "The Tower",
        "The Star",
        "The Moon",
        "The Sun",
        "Judgement",
        "The World",
      ];
    





    return (
        <div className="App">
            <header className="App-header">
                <p>Squeeb</p>
                <Choice2 tarotCards={tarotCards}/>
            </header>
        </div>
    );
    }

export default App;
