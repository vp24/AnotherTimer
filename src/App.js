import React from 'react';
import './App.css';
import Clock from './components/clock/Clock';
import ting from './components/sounds/ting.wav';
import ResetButton from './components/resetButton/resetButton';
import StartButton from './components/startButton/startButton';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      timer: 90
    }
  }

  secondDown = () => {
    this.setState((state, props) => ({
      timer: state.timer - 1
    }));
  }

  startPause = () => {
    if (this.state.isActive === false) {
      this.setState({isActive: true})
      this.timerID = setInterval(
        () => this.secondDown(),
        1000);}
        else {
          this.setState({isActive: false})
          clearInterval(this.timerID);
        }
  }

  reset = () => {
    this.setState({
      timer: 90,
      isActive: false
    }, clearInterval(this.timerID))
  }

  audio = new Audio(ting);
  playAudio = () => {
    this.audio.play()
  }

  componentDidUpdate(){
    if(this.state.timer <= 0){
      this.setState({
        timer: 90
      }, this.playAudio)
    }

  }


  render(){
    return(
      <div>
      <Clock timer = {this.state.timer}/>
      <div className = 'tc'>
      <StartButton isActive = {this.state.isActive} onStart = {this.startPause}/>
      <ResetButton onReset = {this.reset}/>
      </div>
      </div>
    );
  }
}


export default App;
