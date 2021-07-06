import React from 'react';
import Result from './Result';
import { useFetch, userFetch } from '../service/RestaurantService'
import { chunk } from '../service/Utility'

function ResultLayout(props) {

    var searchMethod = 'getAll';
    var searchValue = null;

    if(props.search) {
        searchMethod = 'getByName';
        searchValue = props.searchFor;
    }

    const {loading, data } = useFetch(searchMethod, searchValue);

    const makeDecks = (input, size) => {
        return chunk(input, size);
    };

    const handleBack = () => {
        props.searchFor(null, null);
    }

    return (
        <div className='pt-3'>
          {loading && <p>loading...</p>}
          {data && data.length > 0 &&
            makeDecks(data, 4).map((deck, idx) => (
              <div key={idx} className='card-deck container-fluid pt-3 row'>
                {deck.map((restaurant, idx) => <Result key={restaurant.id} info={restaurant}/>)}
              </div>))
          }
          {data && !Array.isArray(data) && data['name'] !== 'N/A' &&
            typeof data == 'object' && <Result info={data} />
          }
          {(data === false || data['name'] === 'N/A' || data.length === 0) && <h1>Nothing found to matches that search...</h1>}
          {props.search &&
            <button className='btn btn-info pt-3' onClick={handleBack}>Back to Main</button>
          }
        </div>
      );

}

export default ResultLayout;