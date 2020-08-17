import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router';

class ItemData extends Component<RouteComponentProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {...this.props.location.state};
    }

    handleChange = (event: any) => {
        const target = event.target;
        const value = target.name === 'available' ? target.checked : target.value;
        const name = target.name;
        this.setState(() =>{
            return {
                [name]: value   
            }
        });
    }

    handleSubmit = () => {
        this.props.history.push({
            pathname: '/',
            state: this.state
          })
    }

    handleBack = () => {
        this.props.history.push({
            pathname: '/'
          })
    }
    
    render(){
        return(
            <div>
                <form>
                    <h2>Item Details</h2>
                    <div className="item-data">
                        <label> Name - </label>
                        {this.state.name}
                    </div>
                    <div className="item-data">
                        <label> Category - </label>
                        {this.state.category}
                    </div>
                    <div className="item-data">
                        <label> Price - </label>
                        <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                    </div>
                    <div className="item-data">
                        <label> Is Available - </label>
                        <input type="checkbox" name="available" checked={this.state.available} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleSubmit}>Update</button>
                    <button onClick={this.handleBack}>Back</button>
                </form>
            </div>
        )
    }
}

export default ItemData;