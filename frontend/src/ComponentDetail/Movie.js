import React, { useState } from 'react'

function Movie() {

    const[name, Setname] = useState("");
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Movie
