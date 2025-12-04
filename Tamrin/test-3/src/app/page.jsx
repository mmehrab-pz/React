"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const url = "https://randomuser.me/api/?results=10";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("error");
        }

        const data = await response.json();
        setData(data.results);
        console.log(data);
      } catch (error) {
        console.error(`something went wrong: ${error.message}`);
      }
    }
    getUser();
  }, []);
  return (
    <>
      <ul className="flex gap-2.5 flex-wrap">
        {data.map((user, index) => {
          return (
            <li
              className="border border-white rounded-sm px-2.5 py-1.5"
              key={index}
            >
              <h2>
               full name: {user.name.title} {user.name.first} {user.name.last}
              </h2>
              <h3>email: {user.email}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}
