/* eslint-disable no-unused-vars */
// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`

    border: 1px solid black;
    width: 70%;
    display: flex;
    margin: 5% auto;
    justify-content: space-around;
    background-color:black;
    background-image:
    radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
    radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
    radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
    border-radius: 25px;
    color: yellow;
    padding: 0px 25px;
    /* font-family: 'Bungee Outline', cursive; */
    font-size: 1.1rem;
`
const StyledName = styled.h1`
    width: 100%;
`
const StyledList = styled.ul`
    list-style-type: circle;
    width: 40%;
`

export default function Character(props){
    
    const { name, born, characters, films } = props
    console.log(films)
    return (
        <>
        <StyledDiv>
        <StyledName>{name}</StyledName>
        {films.map(elem => 
        <div>
         <p>{elem}</p>
        </div>)}
        </StyledDiv>
        </>
    )


}

