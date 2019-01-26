import React, { Component } from 'react';
import './App.css';
import DrumPad from './DrumPad';

const drumPadData = [
  {
    id: "Chewbacca", 
    letter: "q",
    keyCode: 81, 
    src: "https://www.myinstants.com/media/sounds/chewbacca_PaZrPCY.mp3"
  },
  {
    id: "R2D2",
    letter: "w",
    keyCode: 87,
    src: "https://www.myinstants.com/media/sounds/r2d2.swf.mp3"
  },
  {
    id: "Lightsaber",
    letter: "e",
    keyCode: 69,
    src: "https://www.myinstants.com/media/sounds/sithignition.mp3"
  },
  {
    id: "Blasters",
    letter: "a",
    keyCode: 65,
    src: "https://www.myinstants.com/media/sounds/star-wars-blaster-sound-effects-star-wars-sound-effects-mp3cut.mp3"
  },
  {
    id: "Star Destroyer",
    letter: "s",
    keyCode: 83,
    src: "https://www.myinstants.com/media/sounds/star-wars-stardestroyer-blaster-sound-effect-1.mp3"
  },
  {
    id: "C3Po",
    letter: "d",
    keyCode: 68,
    src: "https://www.myinstants.com/media/sounds/hello-c3po.mp3"
  },
  {
    id: "Yoda",
    letter: "z",
    keyCode: 90,
    src: "https://www.myinstants.com/media/sounds/seek-him-out-you-must-yoda.mp3"
  },
  {
    id: "Battle Droid",
    letter: "x",
    keyCode: 88,
    src: "https://www.myinstants.com/media/sounds/star-wars-b1-battle-droid_kampfdroide-roger-roger-sound.mp3"
  },
  {
    id: "Admiral Ackbar",
    letter: "c",
    keyCode: 67,
    src: "https://www.myinstants.com/media/sounds/adm-ackbar-its-a-trap.mp3"
  }
];

class App extends Component {
  state = {
    display: "Click or Press a Key"
  }

  displayHandler = (display) => {
    this.setState({ display });
  } 

  render() {
    return (
      <div id="drum-machine" className="App">
        <h1 id="display">{this.state.display}</h1>
        <div id="drum-pads" className="stars">{drumPadData.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            keyCode={d.keyCode}
            clickHandler={this.clickHandler}
            handleDisplay={this.displayHandler}
          />   
         ))}</div>        
      </div>
    );
  }
}

export default App;
