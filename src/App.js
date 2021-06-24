import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserForm from './UserForm';

function App() {

  const [classes, setClasses] = useState([])
  const [userClassChoice, setUserClassChoice] = useState([])
  const [races, setRaces] = useState([])
  const [userRaceChoice, setUserRaceChoice] = useState([])

  useEffect(() => {
    axios({
      url:"https://www.dnd5eapi.co/api/classes/",
      method: "GET",
      dataResponse: "json",
    }).then((res)=>{
      setClasses(res.data.results)
      });
    }, []);

  useEffect(() => {
    axios({
      url:"https://www.dnd5eapi.co/api/races/",
      method: "GET",
      dataResponse: "json",
    }).then((res)=>{
      setRaces(res.data.results)
    })
  }, []);
    // as you add more dropdowns, add more arguments to this
const generateSheet = (e, classChoice, raceChoice ) =>{
  e.preventDefault();
  // const of userClassChoice and filter through classes and return classes.name === classChoice
  // create new state for user class choice, setUserClassChoice with the filtered results
  const copyOfClassesData = [...classes];
  const copyOfRacesData = [...races];
  const filteredClassChoice = copyOfClassesData.filter((characterClass =>{
    return characterClass.name === classChoice
  }))
  setUserClassChoice(filteredClassChoice)
  const filteredRaceChoice = copyOfRacesData.filter((characterRace =>{
    return characterRace.name === raceChoice
  }))
  setUserRaceChoice(filteredRaceChoice)
}



  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1><span>D&D</span> Character Generator</h1>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <UserForm
          classes = {classes}
          races = {races}
          generateSheet ={generateSheet}
          />
          <div className="results-div">
            {userClassChoice!= false ? <h2>{userClassChoice[0].name}</h2> : <></>}
            {userRaceChoice!= false ? <h2>{userRaceChoice[0].name}</h2> : <></>}
          </div>
        </div>
        </main>
        <footer>
          <div className="wrapper">
            <p>Created by Colin Caldwell at Juno College</p>
          </div>
        </footer>
    </div>
  );
}

export default App;
