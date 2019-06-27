import React from 'react'

class EditFishForm extends React.Component{
    handleOnchange =(event) => {
        console.log(event.currentTarget.value)
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value 
        }
        this.props.updatedFish(this.props.index, updatedFish)
    } 
    render() {
        return <div className="fish-edit">
            <input name="name" type="text"  ref={this.nameRef}  placeholder="Name" onChange={this.handleOnchange} value={this.props.fish.name} />
            <input name="price" type="text"  ref={this.priceRef} placeholder="Price" onChange={this.handleOnchange} value={this.props.fish.price}/>
            <select name="status" ref={this.statusRef} onChange={this.handleOnchange} value={this.props.fish.status}>
                    <option value="available">
                        Fresh!
                    </option>
                    <option value="unavailable">
                        Sold out!
                    </option>
                </select>
                <textarea name="desc" type="text" ref={this.descRef} onChange={this.handleOnchange} placeholder="Desc" value={this.props.fish.desc}/>
                <input name="image" type="text" ref={this.imageRef} onChange={this.handleOnchange} placeholder="Image" value={this.props.fish.image}/>
            <button onClick={()=>this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    }
}

export default EditFishForm;