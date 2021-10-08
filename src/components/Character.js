/* eslint-disable no-unused-vars */
// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px auto;
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
    font-size: 1.1rem;
    padding: 10px;
`
const StyledName = styled.h1`
    width: 100%;
    padding: 0;
    margin: 0;
`
const StyledList = styled.ul`
width: 60%;
margin: 10px;
text-align: left;
    &:hover {
        transform: scale(2);
    }
`
const StyledUpperDiv = styled.div`
display:flex;
font-family: 'Bungee Outline', cursive;
width: 50%;
font-size: 2rem;
`
const StyledLowerDiv = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 50%;

`
const StyledH2 = styled.h2`
width: 80%;
font-size: 1rem;
margin: 0;
margin-top: 10px;
`
export default function Character(props){
    
    const { name, born, characters, films } = props
    return (
        <>
        <StyledDiv>
            <StyledUpperDiv>
                <StyledName>{name}</StyledName>
            </StyledUpperDiv>
            
            <StyledLowerDiv>
            <StyledH2>Featured Films:</StyledH2>
            {films.map(elem => {
                return <StyledList>☆{elem}☆</StyledList>
            })}
            </StyledLowerDiv>
        </StyledDiv>
       

        </>
    )


}

