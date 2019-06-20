import React from 'react'

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                {/*comment*/}
                <h2>Please enter a store.</h2>
                <input type="text" placeholder="store name" />
                <button  type="submit" className="visitStore">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;