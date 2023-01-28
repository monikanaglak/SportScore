import React from "react";
import  { Link } from "react-router-dom";
import styled from 'styled-components';

export function Choice_of_user(){
   return(
    <div className="choice_user">
        <Link to="user/12">User 12</Link>
        <Link to="user/18">User 18</Link>
    </div>
   )
}