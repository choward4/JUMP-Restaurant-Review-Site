import {useState, useEffect} from 'react';
import axios from 'axios';

const baseurl = 'http://localhost:8090';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {
    let param = 0;
  
    if (searchValue !== undefined) param = searchValue;
  
    const getAll = `${baseurl}/api/restaurants/`;
    const getById = `${baseurl}/api/restaurant/` + param;
    const getByName = `${baseurl}/api/restaurant/name/` + param;
    const search = `${baseurl}/api/restaurant/search/` + param;
    let url = null;
  
    switch (searchMethod) {
      case 'getById': url = getById;
        break;
      case 'getAll': url = getAll;
        break;
      case 'search': url = search;
        break;
      case 'getByName' : url = getByName;
        break;
      default: url = null;
    }
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async function () {
        try {
          setLoading(true);
          const response = await axios.get(url);
          if (response.status === 200) {
            setData(response.data);
            console.log('Date fetched! -> ' + data[0]);
          }
        } catch (error) {
          setData(false);
          throw error;
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [url]);
    return { loading, data };
  };


  export function createRestaurant(restaurant) {
      return axios.post(`${baseurl}/api/restaurant/add`, restaurant);
  }

  export function updateRestaurant(restaurant) {
      return axios.post(`${baseurl}/api/restaurant/update`, restaurant);
  }

  export function deleteRestaurant(restaurantId) {
      return axios.delete(`${baseurl}/api/restaurant/delete/` + restaurantId);
  }

  export function searchRestaurant(restaurantName) {
      return axios.get(`${baseurl}/api/restaurant/` + restaurantName);
  }