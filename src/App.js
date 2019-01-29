import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ItemsList extends React.Component {
    render() {
        return (
            <div className="itemsList">
                <ShirtEnvyLab123 />
                <div className="item">
                    <div>Рубашка, Envy Lab 456</div>
                    <a href="#"><img src={require('./images/shirt2_sm.jpg')} alt=""/></a>
                    <div>цена: 15 рублей</div>
                </div>
                <div className="item">
                    <div>Рубашка, Envy Lab 789</div>
                    <a href="#"><img src={require('./images/shirt3_sm.jpg')} alt=""/></a>
                    <div>цена: 20 рублей</div>
                </div>
                <div className="item">
                    <div>Джинсы, 511</div>
                    <a href="#"><img src={require('./images/jeans1_sm.jpg')} alt=""/></a>
                    <div>цена: 20 рублей</div>
                </div>
                <div className="item">
                    <div>Джинсы, S.OLIVER</div>
                    <a href="#"><img src={require('./images/jeans2_sm.jpg')} alt=""/></a>
                    <div>цена: 20 рублей</div>
                </div>
                <div className="item">
                    <div>Джинсы, Levi's</div>
                    <a href="#"><img src={require('./images/jeans3_sm.jpg')} alt=""/></a>
                    <div>цена: 50 рублей</div>
                </div>
                <div className="item">
                    <div>Костюм, BAZIONI</div>
                    <a href="#"><img src={require('./images/suit1_sm.jpg')} alt=""/></a>
                    <div>цена: 80 рублей</div>
                </div>
                <div className="item">
                    <div>Костюм, ABSOLUTEX</div>
                    <a href="#"><img src={require('./images/suit2_sm.jpg')} alt=""/></a>
                    <div>цена: 70 рублей</div>
                </div>
                <div className="item">
                    <div>Костюм, LACONI</div>
                    <a href="#"><img src={require('./images/suit3_sm.jpg')} alt=""/></a>
                    <div>цена: 90 рублей</div>
                </div>

            </div>
        )
    }
}


class ShirtEnvyLab123 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
        }
    }
    onClickOpenCloseGoods = (status) => {
        this.setState({ expanded: status})
    }
    render() {
        let expanded = this.state.expanded
        if (expanded == false) {
            return (
                <Shirt1 condition={this.onClickOpenCloseGoods} overlay123={this.props.overlaySwitcher}/>
            )
        } else {
            return (
                <Shirt1Exp condition={this.onClickOpenCloseGoods}/>
            )
        }
    }
}


class Shirt1 extends React.Component {
    state = {
        expanded: true,
        class: 'overlay',
    }

    qweqwe = () => {
        this.props.condition(this.state.expanded)
        this.props.overlay123(this.state.class)
    }
    render() {
        return (
            <div className="itemContainer">
                    <div className="item" >
                        <div className="item_imgAndTitle">
                            <figure>
                                <img src={require('./images/shirt1_sm.jpg')} alt=""/>
                            </figure>
                            <p>Рубашка, Envy Lab 123</p>
                            <button onClick={this.qweqwe}>Подробнее</button>
                        </div>
                        <p>цена: 10 рублей</p>
                    </div>
            </div>
        )
    }
}


class Shirt1Exp extends React.Component {
    state = {
        expanded: false,
        available: true,
        class: null,

    }

    render() {
        let available = this.state.available
        return (
            <div className="itemExp">
                <div className="itemExp_imgAndPrice">
                    <figure>
                        <img src={require('./images/shirt1_big.jpg')} alt=""/>
                    </figure>
                </div>
                <div className="itemExp_titleAndDescription">
                    <a href="#" onClick={() => {
                        this.props.condition(this.state.expanded)
                    }}>x</a>
                    <p>Рубашка, Envy Lab 123</p>
                    <div>
                        <p>Краткое описание</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    {available == true ?
                        <p style={{fontSize: "1.2em", color: "green"}}>В наличии</p> :
                        <p style={{fontSize: "1.2em", color: "red"}}>Под заказ</p>
                    }
                    <p>цена: 10 рублей</p>
                </div>
            </div>
        )
    }
}


class Overlay extends React.Component {
    render() {
        return (
            <div className={this.props.class}></div>
        )
    }
}


class App extends Component {
    state = {
        class: 'overlay',
    }
    overlaySwitcher = (status) => {
        this.setState({ class: status})
    }
    render() {
    return (
        <React.Fragment>
            <Overlay class={this.state.class}/>
            <ItemsList />
        </React.Fragment>


        
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
