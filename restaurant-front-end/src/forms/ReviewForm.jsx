import React, { Component } from 'react';
import './form.css'

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.review.review_id,
            comment: props.review.comment,
            rating: props.review.rating
        }
        
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
                                <label >Comment:</label>
                                <input type="text" name="comment" className="form-control" id="comment" value={this.state.comment} onChange={this.handleChange} required />
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

export default ReviewForm;