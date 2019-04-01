import React from "react";
import products from '../productsData/products'
import { FilterMenu } from'./FilterMenu';
import { ItemsList } from'./ItemsList';


class ItemsListAndFilterMenu extends React.Component {
    state = {
        data: products,
        data2: products.slice(),
        jchecked: false,
        types: [],
    }


    onFilterChange = (datas) => {
        let arr = this.state.data.filter(item => {
            // let qwe = datas.join()
            return item.type === datas
        });
        this.setState({data: arr});
    };
    /*jeansFilterer = (event) => {
        this.setState({jchecked: !this.state.jchecked})
        if (this.state.jchecked === false) {
            let arr = this.state.data.filter(function (item) {
                return item.type === 'jeans'
            })
            this.setState({data: arr})

        } else {
            let arr2 = this.state.data2.filter(function (item) {
                return (item.type !== '')
            })
            this.setState({data: arr2})
        }
    }*/
    render() {
        return (
            <div className="itemsListAndFilter">
                <FilterMenu jFilter={this.jeansFilterer} filter={this.onFilterChange}/>
                <ItemsList data={this.state.data} overlaySwitcher={this.props.overlaySwitcher}/>
            </div>
        )
    }
}


export { ItemsListAndFilterMenu }