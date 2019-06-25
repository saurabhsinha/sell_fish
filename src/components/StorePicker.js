import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
    // constructor() {
    //     super()
    //     this.goToStore = this.goToStore.bind(this)
    // }
    myInput = React.createRef();
    goToStore = event => {
        event.preventDefault()
        console.log(this.myInput.current.value)
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`)
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                {/*comment*/}
                <h2>Please enter a store.</h2>
                < input type = "text"
                required placeholder = "store name"
                ref={this.myInput}
                defaultValue = {
                    getFunName()
                }
                />
                <button  type="submit" className="visitStore">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;