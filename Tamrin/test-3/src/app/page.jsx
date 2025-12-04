'use client'
import React, { useEffect, useState } from 'react'
import Card from '../components/ui/card'


export default function page() {
    const [data , setData] = useState([])
    useEffect(()=>{
        async function getUser(){
            try {
                const url = 'https://randomuser.me/api/?results=10'
                const response = await fetch(url)

                if(!response.ok){
                    throw new Error('network error')
                }
                const data = await response.json()
                setData(data.results)
                console.log(data.results);
                
            } catch (error) {
                console.error(`something went wrong: ${error.message}`);
            }
        }
        getUser()
    },[])
  return (
    <div className='flex gap-2.5 flex-wrap'>
        {data.map((user)=>{
            console.log(user);
            
            return(
                <Card
                 key={user.login.uuid} 
                 src={user.picture.large}
                 gender={user.gender}
                 Fname={user.name.first}
                 Lname={user.name.last}
                 email={user.email}
                 username={user.login.username}
                 phone={user.cell}
                 />
            )
        })}
    </div>
  )
}
