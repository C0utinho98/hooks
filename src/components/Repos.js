import React, {useState, useEffect, memo} from 'react';
import {Repository} from './Repository';

const Repos = memo(({getRepositories, theme}) => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      getRepositories()
        .then((res) => res.json())
        .then((data) => setItems((data && data.items) || []));
    },[getRepositories])
  
    return(
      <div>
        {
          items &&
            items.map((el) => <Repository key={el.id} result={el} theme={theme}/>)
        }
      </div>
    )
  });
  
  export default Repos;