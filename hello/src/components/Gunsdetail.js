import React,{useEffect, useState} from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';


function Gunsdetail() {
  useEffect(()=>{
    fetchItem();
  });

  const{id}=useParams();
  console.log(id);

  const[item,setItem]=useState({
    data:{}}
  );

  
  const fetchItem=async ()=>{
      const fetchItem=await fetch(`https://valorant-api.com/v1/weapons/${id}`);
      const item=await fetchItem.json();
      setItem(item);
      console.log(item);
  }

  return(
      <div>
        <h1>{item.data.displayName}</h1>
        <p className='positiondes'>{item.data.w}</p>
        <img src={item.data.displayIcon} alt=""/>
      </div> 
  );
}


export default Gunsdetail;
