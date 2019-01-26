import React, { Component } from 'react';

export class DrumPad extends Component {
    
    componentDidMount() {
        document.addEventListener('keydown', this.keyPressHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.keyPressHandler);
    }
    
    clickHandler = () => {
        this.audio.play();
        this.props.handleDisplay(this.props.id);
      }

      keyPressHandler = (e) => {
        if (e.keyCode === this.props.keyCode) {
          this.audio.play();
          this.props.handleDisplay(this.props.id);
        }
      }

    render() {       

        return (
            <div 
                className="drum-pad" 
                id={this.props.id} 
                onClick={this.clickHandler}
            >
                <h1>{this.props.letter}</h1>
                <audio id={this.props.letter}
                    className="clip"
                    src={this.props.src}
                    ref={ref => this.audio = ref}>
                </audio>
            </div>
        );        
    }
}

export default DrumPad;
