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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
        
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
                    {this.state.id && <h3>{'Changes for '}</h3>}
                    <form onSubmit={this.handleSubmit}>
                        <div className='row d-inline-flex'>
                            <div className="form-group col">
                                <label >Comment:</label>
                                <input type="text" name="comment" className="form-control" id="comment" value={this.state.comment} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group col">
                                <label >Rating:</label>
                                <input type="text" name="number" className="form-control" id="rating" value={this.state.address} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>

                </div>
            </div>
        );
    }
}

export default ReviewForm;