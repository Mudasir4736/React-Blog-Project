import React, { useState,useEffect } from 'react';
import axios from 'axios'
const Cat = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);

  
    const fetchInfo = () => {
      return axios.get(url).then((res) => setData(res.data));
    };
  console.log(data)
    useEffect(() => {
      fetchInfo();
    }, []);
  
    return (
        <div>
            {
                <h1>{data.name}</h1>
            }
        </div>
    );
}

export default Cat;
