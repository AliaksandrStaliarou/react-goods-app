import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let textFish = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\\n\' +\n' +
    '        \'            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\\n\' +\n' +
    '        \'            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\\n\' +\n' +
    '        \'            voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

let goods = [
    {
        id: 1,
        type: 'shirt',
        title: 'Рубашка, Envy Lab 123',
        image: './images/shirt1_sm.jpg',
        bigImage: './images/shirt1_big.jpg',
        price: 'цена: 10 рублей',
        priseNum: 10,
        extraInfo: textFish,
        available: true
    },
    {
        id: 2,
        type: 'shirt',
        title: 'Рубашка, Envy Lab 456',
        image: './images/shirt2_sm.jpg',
        bigImage: './images/shirt2_big.jpg',
        price: 'цена: 15 рублей',
        priseNum: 15,
        extraInfo: textFish,
        available: true
    },
    {
        id: 3,
        type: 'shirt',
        title: 'Рубашка, Envy Lab 789',
        image: './images/shirt3_sm.jpg',
        bigImage: './images/shirt3_big.jpg',
        vBall: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Volleyball.jpg',
        price: 'цена: 20 рублей',
        priseNum: 20,
        extraInfo: textFish,
        available: true
    }

]




// <img src={require('./images/shirt1_sm.jpg')} alt=""/>
class ItemGoodsSmall extends React.Component {
    render() {
        let item = this.props.data
        return(
            <div className="itemContainer">
                <div className="item" >
                    <div className="item_imgAndTitle">
                        <figure>
                            <img src='' alt=""/>
                        </figure>
                        <p>{item.title}</p>
                        <button onClick={this.expanderAndOverlayer}>Подробнее</button>
                    </div>
                    <p>{item.price}</p>
                </div>
            </div>
        )
    }
}

class ItemsList extends React.Component {
    render() {
        let goodsList = this.props.data.map(function(item) {
            return <ItemGoodsSmall data={item} />
        })
        return(
            <React.Fragment>
                {goodsList}
            </React.Fragment>
        )
    }
}



class ItemsListAndFilter extends React.Component {
    render() {
        return (
            <div className="itemsListAndFilter">
                <FilterMenu />
                <ItemsList data={goods} overlaySwitcher={this.props.overlaySwitcher}/>
            </div>
        )
    }
}


class FilterMenu extends React.Component {
    render() {
        return (
            <div className="filterContainer">
                <div className="filterContainer_clothes">
                    <p>Одежда</p>
                    <ul>
                        <li><label htmlFor="jeans"><input type="checkbox" id="jeans"/><span>Джинсы</span></label></li>
                        <li><label htmlFor="suits"><input type="checkbox" id="suits"/><span>Костюмы</span></label></li>
                        <li><label htmlFor="sweaters"><input type="checkbox" id="sweaters"/><span>Свитеры</span></label></li>
                    </ul>
                </div>
                <div className="filterContainer_price">
                    <p>Цена</p>
                    <div>
                        <input type="text" placeholder='от'/>
                        <input type="text" placeholder='до'/>
                    </div>
                </div>
            </div>
        )
    }
}


/*class ItemsList extends React.Component {
    render() {
        return (
            <div className="itemsList">
                <ShirtEnvyLab123 overlaySwitcher={this.props.overlaySwitcher} />
                <ShirtEnvyLab456 overlaySwitcher={this.props.overlaySwitcher} />
                <ShirtEnvyLab789 overlaySwitcher={this.props.overlaySwitcher} />
                <Jeans511 overlaySwitcher={this.props.overlaySwitcher} />
            </div>
        )
    }
}*/


class ShirtEnvyLab123 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'shirt',
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
                <Shirt1 condition={this.onClickOpenCloseGoods} overlaySwitcher={this.props.overlaySwitcher} />
            )
        } else {
            return (
                <Shirt1Exp condition={this.onClickOpenCloseGoods} overlaySwitcher={this.props.overlaySwitcher}/>
            )
        }
    }
}
class Shirt1 extends React.Component {
    state = {
        expanded: true,
        class: 'overlay',
    }
    expanderAndOverlayer = () => {
        this.props.condition(this.state.expanded)
        this.props.overlaySwitcher(this.state.class)
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
                            <button onClick={this.expanderAndOverlayer}>Подробнее</button>
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
        class: '',

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
                        this.props.overlaySwitcher(this.state.class)
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




class ShirtEnvyLab456 extends React.Component {
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
                <Shirt456 condition={this.onClickOpenCloseGoods} overlaySwitcher={this.props.overlaySwitcher} />
            )
        } else {
            return (
                <Shirt1Exp456 condition={this.onClickOpenCloseGoods} overlaySwitcher={this.props.overlaySwitcher}/>
            )
        }
    }
}
class Shirt456 extends React.Component {
    state = {
        expanded: true,
        class: 'overlay',
    }
    expanderAndOverlayer = () => {
        this.props.condition(this.state.expanded)
        this.props.overlaySwitcher(this.state.class)
    }
    render() {
        return (
            <div className="itemContainer">
                <div className="item" >
                    <div className="item_imgAndTitle">
                        <figure>
                            <img src={require('./images/shirt2_sm.jpg')} alt=""/>
                        </figure>
                        <p>Рубашка, Envy Lab 456</p>
                        <button onClick={this.expanderAndOverlayer}>Подробнее</button>
                    </div>
                    <p>цена: 15 рублей</p>
                </div>
            </div>
        )
    }
}
class Shirt1Exp456 extends React.Component {
    state = {
        expanded: false,
        available: true,
        class: '',

    }
    render() {
        let available = this.state.available
        return (
            <div className="itemExp">
                <div className="itemExp_imgAndPrice">
                    <figure>
                        <img src={require('./images/shirt2_big.jpg')} alt=""/>
                    </figure>
                </div>
                <div className="itemExp_titleAndDescription">
                    <a href="#" onClick={() => {
                        this.props.condition(this.state.expanded)
                        this.props.overlaySwitcher(this.state.class)
                    }}>x</a>
                    <p>Рубашка, Envy Lab 456</p>
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
                    <p>цена: 15 рублей</p>
                </div>
            </div>
        )
    }
}

class ShirtEnvyLab789 extends React.Component {
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
                <Shirt789 condition={this.onClickOpenCloseGoods} overlaySwitcher={this.props.overlaySwitcher} />
            )
        } else {
            return (
                <Shirt1Exp789 condition={this.onClickOpenCloseGoods} overlaySwitcher={this.props.overlaySwitcher}/>
            )
        }
    }
}
class Shirt789 extends React.Component {
    state = {
        expanded: true,
        class: 'overlay',
    }
    expanderAndOverlayer = () => {
        this.props.condition(this.state.expanded)
        this.props.overlaySwitcher(this.state.class)
    }
    render() {
        return (
            <div className="itemContainer">
                <div className="item" >
                    <div className="item_imgAndTitle">
                        <figure>
                            <img src={require('./images/shirt3_sm.jpg')} alt=""/>
                        </figure>
                        <p>Рубашка, Envy Lab 789</p>
                        <button onClick={this.expanderAndOverlayer}>Подробнее</button>
                    </div>
                    <p>цена: 20 рублей</p>
                </div>
            </div>
        )
    }
}
class Shirt1Exp789 extends React.Component {
    state = {
        expanded: false,
        available: true,
        class: '',

    }
    render() {
        let available = this.state.available
        return (
            <div className="itemExp">
                <div className="itemExp_imgAndPrice">
                    <figure>
                        <img src={require('./images/shirt3_big.jpg')} alt=""/>
                    </figure>
                </div>
                <div className="itemExp_titleAndDescription">
                    <a href="#" onClick={() => {
                        this.props.condition(this.state.expanded)
                        this.props.overlaySwitcher(this.state.class)
                    }}>x</a>
                    <p>Рубашка, Envy Lab 789</p>
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
                    <p>цена: 20 рублей</p>
                </div>
            </div>
        )
    }
}


class Jeans511 extends React.Component {
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
                <JeansCompacted511 condition={this.onClickOpenCloseGoods} overlaySwitcher={this.props.overlaySwitcher} />
            )
        } else {
            return (
                <JeansExpanded511 condition={this.onClickOpenCloseGoods} overlaySwitcher={this.props.overlaySwitcher}/>
            )
        }
    }
}
class JeansCompacted511 extends React.Component {
    state = {
        expanded: true,
        class: 'overlay',
    }
    expanderAndOverlayer = () => {
        this.props.condition(this.state.expanded)
        this.props.overlaySwitcher(this.state.class)
    }
    render() {
        return (
            <div className="itemContainer">
                <div className="item" >
                    <div className="item_imgAndTitle">
                        <figure>
                            <img src={require('./images/jeans1_sm.jpg')} alt=""/>
                        </figure>
                        <p>Джинсы, 511</p>
                        <button onClick={this.expanderAndOverlayer}>Подробнее</button>
                    </div>
                    <p>цена: 50 рублей</p>
                </div>
            </div>
        )
    }
}
class JeansExpanded511 extends React.Component {
    state = {
        expanded: false,
        available: true,
        class: '',

    }
    render() {
        let available = this.state.available
        return (
            <div className="itemExp">
                <div className="itemExp_imgAndPrice">
                    <figure>
                        <img src={require('./images/jeans1_big.jpg')} alt=""/>
                    </figure>
                </div>
                <div className="itemExp_titleAndDescription">
                    <a href="#" onClick={() => {
                        this.props.condition(this.state.expanded)
                        this.props.overlaySwitcher(this.state.class)
                    }}>x</a>
                    <p>РДжинсы, 511</p>
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
                    <p>цена: 50 рублей</p>
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
        class: '',
    }
    overlaySwitcher = (status) => {
        this.setState({ class: status})
    }
    render() {
    return (
        <React.Fragment>
            <Overlay class={this.state.class}/>
            <ItemsListAndFilter overlaySwitcher={this.overlaySwitcher} />
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
