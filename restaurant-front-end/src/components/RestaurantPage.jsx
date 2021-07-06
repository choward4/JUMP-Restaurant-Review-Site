import React from 'react';
import { useLocation } from "react-router-dom";
import { useFetch } from '../service/RestaurantService';
import RestaurantFormModal from '../modal/RestaurantFormModal';
// import ReviewFormModal from '../modal/ReviewFormModal';

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
        
        <div>
            <h1>{data.name}</h1>

            <label>Description of Restaurant: </label>
            <p>{data.description}</p>
            {/* {listItems} */}
            <div>
                {data.average_rating}

            </div>
            <div>
                {data.address}

            </div>
            <div>
                <RestaurantFormModal type='update' restaurant={info}/>
            </div>
            {/* <div>
                <ReviewFormModal type='create'/>
            </div>
             */}
            
            
        </div>
    );
}

export default RestaurantPage;