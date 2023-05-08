import ProfileCard from './components/ProfileCard';
import TextBox from './components/TextBox';
import ChatBubble from './components/ChatBubble';

import whiteFluff from './assets/white-fluff.svg';
import begonia from './assets/begonia.svg';
import monsteraPurplePot from './assets/purple-pot.svg';
import monsteraYellowPot from './assets/grid-pot.svg'
import arrow from './assets/arrow.svg';

import './App.css'

function App() {
  return (
    <div className="App">
      <div className="canvas">
        <ChatBubble text={"Hello! 👋"} last={true} />
        <h1 className="emoji-lg">👩🏾‍💻</h1>
        <img src={whiteFluff} className="whiteFluff" />
        <img src={monsteraPurplePot} className="monsteraPurple" />
        <img src={begonia} className="begonia" />
        <h1 className="title firstName">Emelie</h1>
        <h1 className="title lastName">Johansson</h1>
        <h2 className="underTitle">Working as a software developer <br />
          @ Cygni, part of Accenture</h2>
        <ProfileCard />
        <TextBox text={"something fun here"} />
        <img src={arrow} className="arrow" />
        <div className="emailMeLink">
          <ChatBubble text={"Email me"} />
        </div>
        <img src={monsteraYellowPot} className="monsteraYellow" />
      </div>
    </div>
  )
}

export default App
