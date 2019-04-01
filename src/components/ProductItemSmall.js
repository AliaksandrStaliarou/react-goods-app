import React from "react";


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


export { ProductItemSmall }