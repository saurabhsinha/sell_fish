import React from 'react'

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    createFish = (event) => {
        event.preventDefault()
        const fish = {
            nameRef : this.nameRef.current.value,
            priceRef : parseFloat(this.priceRef.current.value),
            statusRef : this.statusRef.current.value,
            descRef : this.descRef.current.value,
            imageRef : this.imageRef.current.value
        }
        this.props.addFish(fish)
        event.currentTarget.reset();
    }
    render () {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text"  ref={this.nameRef}  placeholder="Name" />
                <input name="price" type="text"  ref={this.priceRef} placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">
                        Fresh!
                    </option>
                    <option value="unavailable">
                        Sold out!
                    </option>
                </select>
                <textarea name="desc" type="text" ref={this.descRef} placeholder="Desc" />
                <input name="image" type="text" ref={this.imageRef} placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm