import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import drawBalls from "./canvas_items/ballCanvas.js";
const style = {
  border: "2px solid green",
  width: "100%",
}
class App extends Component {
  componentDidMount() {
    drawBalls();
  }
  render() {
    return (
      <div className="App">
        <div>
          <canvas id="ballCanvas" style={style}></canvas>
        </div>
      </div>
    );
  }
}

export default App;
