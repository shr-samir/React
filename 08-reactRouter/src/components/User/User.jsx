import React from "react";
import { useParams } from "react-router-dom";
function User() {
   const {userid} = useParams()
  return <div className="bg-gray-500 text-center p-6 font-semibold text-3xl mx-32">User: {userid}</div>;
}

export default User;
