import React,{useEffect, useState} from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';


function AvatarDetail() {
  useEffect(()=>{
    fetchItem();
  });

  const{id}=useParams();
  console.log(id);

  const[item,setItem]=useState({
    data:{}}
  );

  
  const fetchItem=async ()=>{
      const fetchItem=await fetch(`https://valorant-api.com/v1/agents/${id}`);
      const item=await fetchItem.json();
      setItem(item);
      console.log(item);
  }

  return(
      <div>
        <h1>{item.data.displayName}</h1>
        <p className='positiondes'>{item.data.description}</p>
        <img src={item.data.fullPortrait} alt=""/>
      </div> 
  );
}


export default AvatarDetail;
