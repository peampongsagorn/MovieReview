import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

function Error() {
  return (
    <div>
      <NavLink end to="*" ></NavLink>
      <h3>Error</h3>
    </div>
  )
}

export default Error
