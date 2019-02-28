import React, { Component } from 'react';
import './App.css';
import products from './productsData/products'



class Overlay extends React.Component {
    render() {
        return (
            <div className={this.props.class}></div>
        )
    }
}


class ItemsListAndFilter extends React.Component {
    render() {
        return (
            <div className="itemsListAndFilter">
                <FilterMenu />
                <ItemsList data={products} overlaySwitcher={this.props.overlaySwitcher}/>
            </div>
        )
    }
}




class FilterMenu extends React.Component {
    state = {
        jeans: false,
    }
    onInputCheckedJeans = () => {

    }
    render() {
        return (
            <div className="filterContainer">
                <div className="filterContainer_clothes">
                    <p>Одежда</p>
                    <ul>
                        <li>
                            <label htmlFor="jeans">
                                <input type="checkbox" id="jeans" onChange={this.onInputCheckedJeans}/>
                                <span>Джинсы</span>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="suits">
                                <input type="checkbox" id="suits"/>
                                <span>Костюмы</span>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="sweaters">
                                <input type="checkbox" id="shirts"/>
                                <span>Рубашки</span>
                            </label>
                        </li>
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


class ItemsList extends React.Component {
    render() {
        // let overlaySwitcher = this.props.overlaySwitcher
        let productList = this.props.data.map(function(item) {
            return <ProductItem key={item.id} data={item} overlaySwitcher={this.props.overlaySwitcher}/>
        }.bind(this))
        return(
            <div className="itemsList">
                {productList}
            </div>
        )
    }
}


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
                <ProductItemSmall data={this.props.data}
                                  condition={this.onClickFromSmallToBig}
                                  overlaySwitcher={this.props.overlaySwitcher} />
            )
        } else {
            return(
                <ProductItemBig data={this.props.data}
                                condition={this.onClickFromSmallToBig}
                                overlaySwitcher={this.props.overlaySwitcher} />
            )
        }
    }
}


// <img src={require('./images/shirt1_sm.jpg')} alt=""/>
class ProductItemSmall extends React.Component {
    state = {
        expanded: true,
        class: 'overlay',
    }
    onClickFromSmallToBig_And_Overlayer = () => {
        this.props.condition(this.state.expanded)
        this.props.overlaySwitcher(this.state.class)
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
        class: '',
    }
    render() {
        let available = this.props.data.available
        let item = this.props.data
        return (
            <div className="itemExp">
                <div className="itemExp_imgAndPrice">
                    <figure>
                        <img src={item.bigImage} alt=""/>
                    </figure>
                </div>
                <div className="itemExp_titleAndDescription">
                    <p onClick={() => {
                        this.props.condition(this.state.expanded)
                        this.props.overlaySwitcher(this.state.class)
                    }}>x</p>
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