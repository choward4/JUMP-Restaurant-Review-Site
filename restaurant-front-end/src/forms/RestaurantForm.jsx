import React, { Component } from 'react';
import './form.css'

class RestaurantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantId: props.restaurant.restaurant_id,
            name: props.restaurant.name,
            address: props.restaurant.address,
            description: props.restaurant.description,
            average_rating: props.restaurant.average_rating
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    handleSubmit = (event) => {
        console.log('submit');
        this.props.handleCrud(this.state);
    }

    render() {
        return (
            <div>
                <div className="form-style">
                    {this.state.id && <h3>{'Changes for ' + this.state.name}</h3>}
                    <form onSubmit={this.handleSubmit}>
                        <div className='row d-inline-flex'>
                            <div className="form-group col">
                                <label >Restaurant Name:</label>
                                <input type="text" name="name" className="form-control" id="name" value={this.state.name} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group col">
                                <label >Address:</label>
                                <input type="text" name="address" className="form-control" id="address" value={this.state.address} onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label >Description:</label>
                            <input type="text" name="description" className="form-control" id="description" value={this.state.description} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >Average Rating:</label>
                            <input type="number" name="rating" className="form-control" id="rating" value={this.state.average_rating} onChange={this.handleChange} required />
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>

                </div>
            </div>
        );
    }
}

export default RestaurantForm;