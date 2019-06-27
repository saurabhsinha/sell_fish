import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    componentDidMount() {
        const { params } = this.props.match;
        const localstorageRef = localStorage.getItem(params.storeId);
        if(localstorageRef) {
            this.setState({order: JSON.parse(localstorageRef)})
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state:'fishes'
        })
    }
    componentDidUpdate() {
        console.log(this.state.order)
        const { params } = this.props.match;
        localStorage.setItem(params.storeId, JSON.stringify(this.state.order))
    }
    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    
    addFish = fish => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}}`] = fish;
        this.setState({
            fishes
        })
        
    }
    updatedFish = (key, updatedFish) => {
        const fishes = {...this.state.fishes}
        fishes[key] = updatedFish;
        this.setState({
            fishes 
        })
    }
    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({
            fishes
        })
    }
    deleteOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({
            order
        })
    }

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] +1 || 1
        this.setState({
            order
        })
    }
    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes})
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Sea Food Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details=
                        {this.state.fishes[key]} addToOrder={this.addToOrder} index={key}></Fish>)}
                    </ul>
                </div>
                <Order deleteOrder= {this.deleteOrder} fishes={this.state.fishes} order={this.state.order}/>
                <Inventory 
                addFish={this.addFish}
                deleteFish={this.deleteFish}
                updatedFish = {this.updatedFish}
                loadSampleFishes={this.loadSampleFishes}
                fishes={this.state.fishes}
                />
                
            </div>
        )
    }
}

export default App;