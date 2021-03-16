import React, {Component} from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This could also be a functional component
    componentDidUpdate() {
        console.log('OrderSummary DidUpdate');
    }
    render() {
        let ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return ( 
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}</span>
            </li>)
        })
        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} $</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        )
    }
}

export default OrderSummary;