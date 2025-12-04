import React from 'react'

export default function Crad({src,gender,Fname,Lname,email,username,phone}) {
  return (
    <div className='flex border border-white rounded-lg h-[200px]'>
        <figure className='w-[200px] h-full p-2.5'>
            <img src={src} className='w-full h-full rounded-sm' />
        </figure>
        <div className='w-[400px] h-full border-l border-l-white flex flex-col justify-around pl-2.5'>
            <p>full name: {Fname} {Lname}</p>
            <p>gender: {gender}</p>
            <p>email: {email}</p>
            <p>username: {username}</p>
            <p>phone: {phone}</p>
        </div>
    </div>
  )
}
