import React from "react";
import products from '../productsData/products'


class SortingMenu extends React.Component {
    state = {
        sortField: null,
        sortOrder: null,
        sortClass: '',
        //sortedItems: this.props.filteredData
    };
    priceHandler = () => {
        this.setState({
            sortField: 'price',
            sortOrder: 'decr',
            sortClass: 'pinkedDecr'
        }, () => {
            this.props.onSortChange(this.state.sortField, this.state.sortOrder);
        });

       /* let classValue = this.state.sortedClass;
        if (classValue === '') {
            this.setState({sortedClass: 'pinkedDecr'}, () => {
                this.props.transferringSortedDataDecr(this.state.sortedItems);
            });
            this.sortingDecr();
        } else if (classValue === 'pinkedDecr'){
            this.setState({sortedClass: 'pinkedIncr'});
        } else if (classValue === 'pinkedIncr') {
            this.setState({sortedClass: 'pinkedDecr'});
        }*/

    };
    sortDecr = (a, b) => {
        if (a.priceNum < b.priceNum) return 1;
        if (a.priceNum > b.priceNum) return -1;
    };
    sortIncr =(a, b) => {
        if (a.priceNum > b.priceNum) return 1;
        if (a.priceNum < b.priceNum) return -1;
    };
    sortingDecr = () => {
        let itemsDecr = this.props.filteredData;
        itemsDecr.sort(this.sortDecr);
        this.setState({sortedItems: itemsDecr});
        //console.log(itemsDecr);
    };
    sortingIncr = () => {
        let itemsIncr = this.props.filteredData;
        itemsIncr.sort(this.sortIncr);
        this.setState({sortedItems: itemsIncr});
    };


    render() {
            return (
                <ul>
                    <li className={this.state.sortClass} onClick={this.priceHandler}><span>цене</span></li>
                    <li onClick={this.alphabetHandler}><span>алфавиту</span></li>
                </ul>
            )
    }

}


export { SortingMenu }