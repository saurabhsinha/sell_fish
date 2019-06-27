import React from 'react'
import AddFishForm from './addFishForm'
import EditFishForm from './EditFishForm'
class Inventory extends React.Component {
    loadSamples = () => {
        this.props.loadSampleFishes()
    }
    render () {
        return (
            <div className="Inventory">
                <h2>Inventory !</h2>
                {Object.keys(this.props.fishes).map(key => <EditFishForm deleteFish={this.props.deleteFish} index={key} updatedFish={this.props.updatedFish} key={key} fish={this.props.fishes[key]}/>)}
                <AddFishForm addFish={this.props.addFish}></AddFishForm>
                <button className="load-sample-fishes" onClick={this.loadSamples}>Load Sample Fishes</button>
            </div>
            
        )
    }
}

export default Inventory