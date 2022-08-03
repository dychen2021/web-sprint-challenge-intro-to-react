// Write your Character component here
// import React from 'react'

console.log("Entered Character Class");

const Character = (props) => {

  const detailStyle = {
    width: '45%',
    float: 'left',
    padding: '1%',
    height: '205px',
    marginBottom: '2%',
    border: '1px solid darkblue',
    borderRadius: '40%',
    marginLeft: '1%',
    marginRight: '1%',
    textAlign: 'center'
  }

  const h2Style = {
    display: 'flex',
    justifyContent: 'center'
  }

    return (
    <div className='character'>
        <h2 style={h2Style}>{props.char.name}</h2>
        <div className='content'>
            <div style={detailStyle}>
                <p>Gender: {props.char.gender}</p>
                <p>Height: {props.char.height}</p>
                <p>Mass: {props.char.mass}</p>
            </div>
            <div style={detailStyle}>
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