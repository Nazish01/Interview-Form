
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.publicapis')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {/* <h2>Public API</h2> */}
      <ul>
        {/* {data.map((item, index) => (
          <li key={index}>{item.Description}</li>
        ))} */}
        {}
      </ul>
    </div>
  );
};

export default FetchData;
