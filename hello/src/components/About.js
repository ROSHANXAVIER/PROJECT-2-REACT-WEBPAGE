import React,{useState,useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


function About() {
  useEffect(()=>{
    fetchItems();
  },[]);

  const [items,setItems] = useState([]);

  const fetchItems = async () =>{
    const data = await fetch(
      'https://valorant-api.com/v1/agents'
    );
    const items= await data.json();
    console.log(items.data);
    setItems(items.data);
  }
  return(
      <div>
            {items.map(item =>(
              <h1 key={item.uuid}>
                <Link to={`/About/${item.uuid}`}>{item.displayName}</Link></h1>
            ))}      
      </div> 
  );
}

export default About;
