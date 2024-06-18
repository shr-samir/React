import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
   const data = useLoaderData()

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data)
//       });
//   }, []);

  return (
    <div className="text-center mx-32 p-6 bg-slate-800 text-3xl font-semibold text-white flex flex-col gap-6 items-center justify-center">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github profile picture" width={300} className="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
   const response = await fetch("https://api.github.com/users/hiteshchoudhary")
   return response.json()
}