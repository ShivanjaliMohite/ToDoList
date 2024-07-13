// import React from 'react';
// import { useState } from 'react';
// export default function Count()
// {
//     // const [count,setCount]=useState(0);
//     // const increament=()=>{
//     //     setCount(count+1);
//     // }
//     // const decreament=()=>{
//     //     setCount(count-1);
//     // }
//     return (
//         <div>
//             <h1 className='center'>"The key is not to prioritize what's on your schedule, but to schedule your priorities." - Stephen Covey</h1>
//         </div>
//     )

// }
import React from "react";
import backimage from "./backimage.jpg";

export default function Count() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 style={{ textAlign: "center", color: "white" }}>
        "The key is not to prioritize what's on your schedule, but to schedule
        your priorities." - Stephen Covey
      </h3>
    </div>
  );
}
