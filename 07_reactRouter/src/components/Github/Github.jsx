import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/akhileshedd")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

    const data = useLoaderData()
  const { id } = useParams();

  return (
    <>
      {/* <h1 className="bg-slate-400 p-3 text-3xl">Github:{id}</h1> */}
      <div className="bg-slate-400 p-3 text-3xl flex gap-4 justify-center items-center">
        
      <img className="rounded-full size-20" src={data.avatar_url} alt="" />
      <div className="m-3">
      <h1 className="m-2">Github : {data.login}</h1>
      <h2 className="m-2">Github ID : {data.id}</h2>
      </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/akhileshedd')
    return response.json()
}