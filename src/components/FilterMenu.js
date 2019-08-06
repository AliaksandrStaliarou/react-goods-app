import React from "react";
import {SortingMenu} from "./SortingMenu";


class FilterMenu extends React.Component {
    state = {
        sortField: this.props.sortField,
        sortOrder: this.props.sortOrder,
        query: '',
        type: [],
        price: {
            from: null,
            to: null
        }
    };


    onSearchFilterChange = (event) => {
        //this.setState({query: event.currentTarget.value});
        this.setState({
            query: event.currentTarget.value
        }, () => {
            this.props.filter(this.state)
        })
    };
    onClothesFilterChange = (item) => {
        let type = this.state.type;
        if (type.indexOf(item) === -1) {
            type.push(item);
        } else {
            let index = type.indexOf(item);
            type.splice(index, 1);
        }
        this.setState({type: type});
        this.props.filter(this.state);
    };
    onPriceFromFilterChange = (event) => {
        let priceFrom = event.currentTarget.value;
        let isNumber = this.isNumeric(priceFrom);
        if (isNumber === true) {
            this.setState({
                price: {
                    from: parseInt(priceFrom),
                    to: this.state.price.to
                }
            }, () => {
                this.props.filter(this.state);
            });
        } else {
            this.setState({
                price: {
                    from: null,
                    to: this.state.price.to
                }
            }, () => {
                this.props.filter(this.state);
            });
        }
    };
    onPriceToFilterChange = (event) => {
        let priceTo = event.currentTarget.value;
        let isNumber = this.isNumeric(priceTo);
        if (isNumber === true) {
           this.setState({
               price: {
                   from: this.state.price.from,
                   to: parseInt(priceTo)
               }
           }, () => {
               this.props.filter(this.state);
           });
        } else {
            this.setState({
                price: {
                    from: this.state.price.from,
                    to: null
                }
            }, () => {
                this.props.filter(this.state);
            });
        }
    };

    //numeric checking
    isNumeric = (n) => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    render() {
        const TYPES = [
            {
                type: 'jeans',
                label: 'Джинсы'
            },
            {
                type: 'shirt',
                label: 'Рубашки'
            },
            {
                type: 'suit',
                label: 'Костюмы'
            },
        ];
        let typeCheckboxList = TYPES.map(item => {
            return(
                <li>
                    <label htmlFor={item.type}>
                        <input type="checkbox" id={item.type}
                               onChange={e => this.onClothesFilterChange(item.type) }/>
                        <span>{item.label}</span>
                    </label>
                </li>
            )
        });
        return (
            <div className="filterContainer">
                <div className="searchInput">
                    <input type="text" placeholder="Поиск" onChange={this.onSearchFilterChange}/>
                </div>
                <div className="filterContainer_clothes">
                    <p>Одежда</p>
                    <ul>
                        {typeCheckboxList}
                    </ul>
                </div>
                <div className="filterContainer_price">
                    <p>Цена</p>
                    <div>
                        <input id="from" type="text" placeholder='от' onChange={this.onPriceFromFilterChange}/>
                        <input id="to" type="text" placeholder='до' onChange={this.onPriceToFilterChange}/>
                    </div>
                </div>
            </div>
        )
    }
}


export { FilterMenu }