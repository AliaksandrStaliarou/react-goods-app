import React, { Component } from 'react';
import './App.css';
import { Overlay } from './components/Overlay'
import { ItemsListAndFilterMenu } from './components/ItemsListAndFilterMenu'


class App extends Component {
    state = {
        class: '',
    };
    overlaySwitcher = (status) => {
        this.setState({ class: status})
    };
    render() {
    return (
        <React.Fragment>
            <Overlay class={this.state.class}/>
            <ItemsListAndFilterMenu overlaySwitcher={this.overlaySwitcher} />
        </React.Fragment>

//
        
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    );
  }
}


export default App;