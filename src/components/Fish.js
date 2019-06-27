import React from 'react'
import {formatPrice} from '../helpers'
class Fish extends React.Component {
    addToOrder = () => {
        this.props.addToOrder(this.props.index)
    }
    render () {
        const {image, name, desc, price, status} = this.props.details
        const isAvailable = this.props.details.status === 'available'
        return (
            <li className="menu-fish">
                <img src={image} alt={name}></img>
                <h3 className="fish-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.addToOrder}>{isAvailable ? 'Add to cart' : 'sold out'} </button>
            </li>
        )
    }
}

export default Fish