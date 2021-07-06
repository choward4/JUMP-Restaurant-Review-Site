import React from 'react';
import { useLocation } from "react-router-dom";
import { useFetch } from '../service/RestaurantService';
import RestaurantFormModal from '../modal/RestaurantFormModal';
import ReviewFormModal from '../modal/ReviewFormModals'
import './RestaurantPage.css'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}



function RestaurantPage(props) {
    const query = useQuery();
    const id = query.get("id");
    const info = useFetch('getById', id);
    const data = info.data;
    // const listItems = data.reviews.map((d) => <li key={d.comment}>{d.comment}</li>);


    

    console.log(info.data);
    return (
        
        <div class="restaurant-page">
            <h1>{data.name}</h1>
            <br/>

            <label>Description of Restaurant: </label>
            <p>{data.description}</p>
            {/* {listItems}  */}
            <div>
                <p1>Average rating: </p1>{data.average_rating}

            </div>
            <div>
                <p1>Address: </p1>{data.address}

            </div>
            <br/>
            <div class="row">
                <div class="col-md-1">
                    <RestaurantFormModal type='update' restaurant={info}/>
                </div>
                
                <div class="col-md-3">
                    <ReviewFormModal type='create'/>
                </div>
            </div>
            
            
            
        </div>
    );
}

export default RestaurantPage;