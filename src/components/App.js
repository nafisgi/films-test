import React from 'react'
import "materialize-css"
import '../styles/style.css'
import  '../styles/main.scss'
import Routers from "./Routers";

export default () => (
  <div className="container d-flex justify-content-center">
    <Routers />
  </div>
);