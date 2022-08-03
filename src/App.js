import React, {useState,useEffect} from 'react';
import Character from './components/Character';
import axios from 'axios';

const dummyData = {
  Arr:[{
    name: "C-3PO", 
    height: "167", 
    mass: "75", 
    hair_color: "n/a", 
    skin_color: "gold", 
    eye_color: "yellow", 
    birth_year: "112BBY", 
    gender: "n/a"
  }, {
    name: "Luke Skywalker", 
    height: "172", 
    mass: "77", 
    hair_color: "blond", 
    skin_color: "fair", 
    eye_color: "blue", 
    birth_year: "19BBY", 
    gender: "male"
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


  // console.log(dummyData.Arr);
  <div>
    <header>
      <button>Next Character</button>
      <button>Previous Character</button>
    </header>
    <div>
      <section>
      {
        data.map((element) => (
            <div className="App" key = {`${element.name}-${element.height}-${element.birth_year}`}>
              <h1 className="Header">Characters</h1>
              <Character char={element} key={`${element.name}-${element.height}-${element.birth_year}`} />
            </div>
          ))
      }
      </section>
    </div>
  </div>
  return (
    <div>
      <header>
        <h1 className="Header">Characters</h1>
      </header>
      <div>
        {
          data.map((element) => (
            <div className="App" key = {`${element.name}-${element.height}-${element.birth_year}`}>
              <Character char={element} key={`${element.name}-${element.height}-${element.birth_year}`} />
            </div>
        ))
        }
      </div>
    </div>
  );
}

export default App;
