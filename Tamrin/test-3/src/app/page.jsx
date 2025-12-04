"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const url = "https://randomuser.me/api/?results=1";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("error");
        }

        const data = await response.json();        
        setData(data.results)
            console.log(data);
      } catch(error) {
        console.error(`something went wrong: ${error.message}`);
      }
    }
    getUser()
    
  }, []);
  return (
    <>
        <ul>{data.map((user,index)=>{
             return <li key={index}> {user.name.first} {user.name.last} - {user.email} </li>
        })}</ul>
    </>
  )
}
