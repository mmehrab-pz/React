"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/ui/card";

export default function page() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    async function getUser() {
      try {
        const url = "https://randomuser.me/api/?results=100";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("network error");
        }
        const data = await response.json();
        setData(data.results);
        setFlag(!flag);
        console.log(data.results);
      } catch (error) {
        console.error(`something went wrong: ${error.message}`);
      }
    }
    getUser();
  }, []);
  if (flag) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }
  return (
    <div className="flex gap-2.5 flex-wrap">
      {data.map((user) => {
        console.log(user);

        return (
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
        );
      })}
    </div>
  );
}
