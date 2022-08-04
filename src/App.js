import React, {useState,useEffect} from 'react';
import Character from './components/Character';
import axios from 'axios';

const dummyData = {
  Arr:[{
    name: "Bob", 
    height: "1", 
    mass: "1", 
    hair_color: "n/a", 
    skin_color: "n/a", 
    eye_color: "n/a", 
    birth_year: "1BBY", 
    gender: "n/a"
  }]
}

const App = (foo) => {
  const [data, setData] = useState(dummyData.Arr);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const AppStyle = {
    border: '5px solid #02ffa7',
    borderRadius: '10%',
    width: '50%',
    marginLeft: '25%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255, 255, 255)',
    opacity: '0.5',
    marginTop:'1%',
    marginBottom:'1%'
  }

  const h1Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2%',
    paddingBottom: '2%',
    fontSize: '4em'
  }

  return (
    <div>
      <header>
        <h1 style={h1Style}>Characters</h1>
      </header>
      <div>
        {
          data.map((element) => (
            <div style={AppStyle} key = {`${element.name}-${element.height}-${element.birth_year}`} >
              <Character char={element} key={`${element.name}-${element.height}-${element.birth_year}`} />
            </div>
        ))
        }
      </div>
    </div>
  );
}

export default App;
