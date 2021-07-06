import {useState, useEffect} from 'react';
import axios from 'axios';

const baseurl = 'http://localhost:8090';


  export function createReview(review) {
      return axios.post(`${baseurl}/api/review/1/4`, review);
  }



  