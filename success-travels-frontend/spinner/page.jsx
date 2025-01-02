import React from 'react'

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };


const Spinner = () => {
    
  let [color, setColor] = useState("#ff0000");
   let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading flex justify-center items-center text-center">

      <ClipLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner