import React from "react";
import products from '../productsData/products'
import { FilterMenu } from'./FilterMenu';
import { ItemsList } from'./ItemsList';


class ItemsListAndFilterMenu extends React.Component {
    state = {
        data: products,
        filteredData: products.slice(),
    };

    onFilterChange = (filterData) => {
        let query = filterData.query.toLowerCase();
        let types = filterData.type;
        let priceFrom = filterData.price.from;
        let priceTo = filterData.price.to;

        isTypeMatching = () => {
            alert('type')
        };

        isQueryMatching = () => {
            alert('query')
        };

        isPriceMatching = () => {
            alert('price')
        };

        return isTypeMatching() && isQueryMatching() && isPriceMatching();

        /*let filteredTypesQuery, filteredTypesQueryAndPrice, storageOfFilteredTypesAndQuery;

        if (priceFrom === null && types.length !== 0 || query !== '' ) {
            filteredTypesQuery = this.state.data.filter(item => {
                let isTypeMatching = types.indexOf(item.type) !== -1;
                let isQueryMatching = query.length > 0 && item.title.toLowerCase().indexOf(query) !== -1;
                return isQueryMatching || isTypeMatching;
            });
            this.setState({filteredData: filteredTypesQuery})

        } else if (types.length === 0 && query === '' && priceFrom === null) {
            filteredTypesQuery = this.state.data.filter(item => {
                return true;
            });
            this.setState({filteredData: filteredTypesQuery})

        } else if (types.length === 0 && query === '' && priceFrom !== null) {
            filteredTypesQuery = this.state.data.filter(item => {
                let isPriceFromMatching = item.priceNum >= priceFrom;
                return isPriceFromMatching;
            });
            this.setState({filteredData: filteredTypesQuery})

        } else if (priceFrom !== null && types.length !== 0 || query !== '') {
            filteredTypesQuery = this.state.data.filter(item => {
                let isTypeMatching = types.indexOf(item.type) !== -1;
                let isQueryMatching = query.length > 0 && item.title.toLowerCase().indexOf(query) !== -1;
                return isQueryMatching || isTypeMatching;
            });
            storageOfFilteredTypesAndQuery = filteredTypesQuery;
            filteredTypesQueryAndPrice = storageOfFilteredTypesAndQuery.filter(item => {
                let isPriceFromMatching = item.priceNum >= priceFrom;
                return isPriceFromMatching;
            });
            this.setState({filteredData: filteredTypesQueryAndPrice})
        }*/


       /* let filteredTypes = this.state.data.filter(item => {
            if (types.length === 0 && query === '' && priceFrom === null) {
                return true
            }
            let isTypeMatching = types.indexOf(item.type) !== -1;
            let isQueryMatching = query.length > 0 && item.title.toLowerCase().indexOf(query) !== -1;


            let isPriceFromMatching;
            if (priceFrom === null) {
                isPriceFromMatching = false;
            } else {
                isPriceFromMatching = item.priceNum >= priceFrom;
            }
            //let isPriceToMatching = priceTo <= item.priceNum;

            if (types.length === 0 && query === '') {
                return isPriceFromMatching;
            }

            return isQueryMatching || isTypeMatching;
        });

        this.setState({filteredData: filteredTypes})

        if (types.length !== 0 || query !== '') {
            this.setState({filteredData: filteredTypes})
        } else {
            let filteredTypes2 = filteredTypes.filter(item => {

            })
        }*/

    };

    render() {
        return (
            <div className="itemsListAndFilter">
                <FilterMenu filter={this.onFilterChange}/>
                <ItemsList data={this.state.filteredData} overlaySwitcher={this.props.overlaySwitcher}/>
            </div>
        )
    }
}


export { ItemsListAndFilterMenu }