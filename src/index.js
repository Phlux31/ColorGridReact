import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Container extends React.Component {
    render() {
        var divs = [];
        for (var i = 0; i < 200; i++) {
            divs.push(<ColorBox key={i} />);
        }
        return <div className="container">{divs}</div>;
    }
}

class ColorBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boxBackground: "rgb(85, 84, 84)"
        }
    }

    changeColor = () => {
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        this.setState({
            boxBackground: "rgb(" + r + "," + g + "," + b + ")"
        });
    }

    render() {
      return (
            <div className="colorbox" style={{
                    background: this.state.boxBackground
                }}
                onMouseEnter={this.changeColor} />
      );
    }
  }

  ReactDOM.render(
    <Container />,
    document.getElementById('root')
  );