import React, { Component } from 'react';
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
        bigImage: '/images/shirt1_big.jpg',
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


class ProductItem extends React.Component {
    state = {
        expanded: false,
    }
    onClickFromSmallToBig = (status) => {
        this.setState({expanded: status})
    }
    render() {
        let expanded = this.state.expanded
        if (expanded == false) {
            return(
                <ProductItemSmall data={this.props.data} condition={this.onClickFromSmallToBig} />
            )
        } else {
            return(
                <ProductItemBig data={this.props.data} condition={this.onClickFromSmallToBig} />
            )
        }
    }
}




// <img src={require('./images/shirt1_sm.jpg')} alt=""/>
class ProductItemSmall extends React.Component {
    state = {
        expanded: true,
    }
    onClickFromSmallToBig_And_Overlayer = () => {
        this.props.condition(this.state.expanded)
    }
    render() {
        let item = this.props.data
        return(
            <div className="itemContainer">
                <div className="item" >
                    <div className="item_imgAndTitle">
                        <figure>
                            <img src={item.image} alt=""/>
                        </figure>
                        <p>{item.title}</p>
                        <button onClick={this.onClickFromSmallToBig_And_Overlayer}>Подробнее</button>
                    </div>
                    <p>{item.price}</p>
                </div>
            </div>
        )
    }
}


class ProductItemBig extends React.Component {
    state = {
        expanded: false,
        available: true,
        class: 'overlay',

    }
    render() {
        let available = this.state.available
        let item = this.props.data
        return (
            <div className="itemExp">
                <div className="itemExp_imgAndPrice">
                    <figure>
                        <img src={item.bigImage} alt=""/>
                    </figure>
                </div>
                <div className="itemExp_titleAndDescription">
                    <a href="#" onClick={() => {
                        this.props.condition(this.state.expanded)
                        this.props.overlaySwitcher(this.state.class)
                    }}>x</a>
                    <p>{item.title}</p>
                    <div>
                        <p>Краткое описание</p>
                        <p>{item.extraInfo}</p>
                    </div>
                    {available == true ?
                        <p style={{fontSize: "1.2em", color: "green"}}>В наличии</p> :
                        <p style={{fontSize: "1.2em", color: "red"}}>Под заказ</p>
                    }
                    <p>{item.price}</p>
                </div>
            </div>
        )
    }
}




class ItemsList extends React.Component {
    render() {
        let productList = this.props.data.map(function(item) {
            return <ProductItem key={item.id} data={item} />
        })
        let goodsListExpanded = this.props.data.map(function(item) {
            return <ProductItemBig key={item.id} data={item} />
        })
        return(
            <div className="itemsList">
                {productList}
            </div>
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
                                <img src='' alt=""/>
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
                        <img src='' alt=""/>
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
