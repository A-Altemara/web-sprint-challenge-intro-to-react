// Write your Character component here
import React from "react";

export function Character(props) {
    console.log('Character')
    console.log(props)
    return (
        <>
        <h2>{props.char.name}</h2>
        <h3>Gender: {props.char.gender}</h3>
        <h3>Height: {props.char.height}</h3>
        <h3>Mass: {props.char.mass}</h3>
        <h3>Birth Year: {props.char.birth_year}</h3>
        <h3>Eye Color: {props.char.eye_color}</h3>
        <h3>Hair Color: {props.char.hair_color}</h3>
        <h3>Skin Color: {props.char.skin_color}</h3>
        </>
        )
}

export function MappedCharacters({char}){
    console.log('Mapped')
    console.log(char)
    return null
    // char.map((ch, idx) => <li> {Character(ch)} key={idx}</li>)
}


export default MappedCharacters