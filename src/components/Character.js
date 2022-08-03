// Write your Character component here
// import React from 'react'

console.log("Entered Character Class");

const Character = (props) => {
    console.log(props);
    console.log('Character');
    return (
    <div className='character'>
        <h2>{props.char.name}</h2>
        <div className='content'>
            <div className="detail">
                <p>Gender: {props.char.gender}</p>
                <p>Height: {props.char.height}</p>
                <p>Mass: {props.char.mass}</p>
            </div>
            <div className="detail">
                <p>Birth Year: {props.char.birth_year}</p>
                <p>Eye Color: {props.char.eye_color}</p>
                <p>Hair Color: {props.char.hair_color}</p>
                <p>Skin Color: {props.char.skin_color}</p>
            </div>
        </div>
    </div>
    )
}
export default Character;