import React from 'react'
import AddFishForm from './addFishForm'
class Inventory extends React.Component {
    render () {
        return (
            <div className="Inventory">
                <h2>Inventory !</h2>
                <AddFishForm addFish={this.props.addFish}></AddFishForm>
            </div>
        )
    }
}

export default Inventory