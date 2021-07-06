import {useState, useEffect} from 'react';
import axios from 'axios';

const baseurl = 'http://localhost:8090';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {
    let param = 0;
  
    if (searchValue !== undefined) param = searchValue;
  
    const getAll = `${baseurl}/api/reviews`;
    const getById = `${baseurl}/api/review/` + param;
    const search = `${baseurl}/api/restaurant/reviews/` + param;
    let url = null;
  
    switch (searchMethod) {
      case 'getById': url = getById;
        break;
      case 'getAll': url = getAll;
        break;
      case 'search': url = search;
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


  export function createAdmin(admin) {
      return axios.post(`${baseurl}/api/addmin/add`, admin);
  }

  export function updateUser(admin) {
      return axios.post(`${baseurl}/api/admin/update`, admin);
  }

  export function deleteUser(adminId) {
      return axios.delete(`${baseurl}/api/admin/delete/` + adminId);
  }

  