import React from "react";


class FilterMenu extends React.Component {
    state = {
        query: '',
        type: [],
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
        this.props.filter(this.state)
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
                        <input type="text" placeholder='от'/>
                        <input type="text" placeholder='до'/>
                    </div>
                </div>
            </div>
        )
    }
}


export { FilterMenu }