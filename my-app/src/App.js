import './App.css';
import Choice2 from './Choice2';

function App() {



    const tarotCards = [
        "00-TheFool.jpg",
        "01-TheMagician.jpg",
        "02-TheHighPriestess.jpg",
        "03-TheEmpress.jpg",
        "04-TheEmperor.jpg",
        "05-TheHierophant.jpg",
        "06-TheLovers.jpg",
        "07-TheChariot.jpg",
        "08-Strength.jpg",
        "09-TheHermit.jpg",
        "10-WheelOfFortune.jpg",
        "11-Justice.jpg",
        "12-TheHangedMan.jpg",
        "13-Death.jpg",
        "14-Temperance.jpg",
        "15-TheDevil.jpg",
        "16-TheTower.jpg",
        "17-TheStar.jpg",
        "18-TheMoon.jpg",
        "19-TheSun.jpg",
        "20-Judgement.jpg",
        "21-TheWorld.jpg",
        "CardBacks.jpg",
        "Cups01.jpg",
        "Cups02.jpg",
        "Cups03.jpg",
        "Cups04.jpg",
        "Cups05.jpg",
        "Cups06.jpg",
        "Cups07.jpg",
        "Cups08.jpg",
        "Cups09.jpg",
        "Cups10.jpg",
        "Cups11.jpg",
        "Cups12.jpg",
        "Cups13.jpg",
        "Cups14.jpg",
        "Pentacles01.jpg",
        "Pentacles02.jpg",
        "Pentacles03.jpg",
        "Pentacles04.jpg",
        "Pentacles05.jpg",
        "Pentacles06.jpg",
        "Pentacles07.jpg",
        "Pentacles08.jpg",
        "Pentacles09.jpg",
        "Pentacles10.jpg",
        "Pentacles11.jpg",
        "Pentacles12.jpg",
        "Pentacles13.jpg",
        "Pentacles14.jpg",
        "Swords01.jpg",
        "Swords02.jpg",
        "Swords03.jpg",
        "Swords04.jpg",
        "Swords05.jpg",
        "Swords06.jpg",
        "Swords07.jpg",
        "Swords08.jpg",
        "Swords09.jpg",
        "Swords10.jpg",
        "Swords11.jpg",
        "Swords12.jpg",
        "Swords13.jpg",
        "Swords14.jpg",
        "Wands01.jpg",
        "Wands02.jpg",
        "Wands03.jpg",
        "Wands04.jpg",
        "Wands05.jpg",
        "Wands06.jpg",
        "Wands07.jpg",
        "Wands08.jpg",
        "Wands09.jpg",
        "Wands10.jpg",
        "Wands11.jpg",
        "Wands12.jpg",
        "Wands13.jpg",
        "Wands14.jpg"
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
