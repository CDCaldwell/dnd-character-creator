import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserForm from './UserForm';

function App() {

  const [classes, setClasses] = useState([])
  const [userClassChoice, setUserClassChoice] = useState([])
  const [races, setRaces] = useState([])
  const [userRaceChoice, setUserRaceChoice] = useState([])
  const [recommendedStats, setRecommendedStats] = useState()

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
const generateSheet = (e, classChoice, raceChoice ) =>{
  e.preventDefault();

  const copyOfClassesData = [...classes];
  const copyOfRacesData = [...races];
  // setUserClassChoice
  const filteredClassChoice = copyOfClassesData.filter((characterClass =>{
    return characterClass.name === classChoice
  }))
  setUserClassChoice(filteredClassChoice)
  // set recommendedStats
  if (filteredClassChoice[0].name == "Bard"){
    setRecommendedStats("Recommended Abilities: Charisma & Dexterity")
  } else if (filteredClassChoice[0].name == "Barbarian"){
    setRecommendedStats("Recommended Abilities: Strength & Constitution")
  }else if (filteredClassChoice[0].name == "Cleric"){
    setRecommendedStats("Recommended Abilities: Wisdom & Constitution")
  }else if (filteredClassChoice[0].name == "Druid"){
    setRecommendedStats("Recommended Abilities: Wisdom & Dexterity or Constitution")
  }else if (filteredClassChoice[0].name == "Fighter"){
    setRecommendedStats("Recommended Abilities: Strength & Constitution")
  }else if (filteredClassChoice[0].name == "Monk"){
    setRecommendedStats("Recommended Abilities: Dexterity & Wisdom")
  }else if (filteredClassChoice[0].name == "Paladin"){
    setRecommendedStats("Recommended Abilities: Strength & Charisma")
  }else if (filteredClassChoice[0].name == "Rogue"){
    setRecommendedStats("Recommended Abilities: Dexterity & Wisdom")
  }else if (filteredClassChoice[0].name == "Ranger"){
    setRecommendedStats("Recommended Abilities: Dexterity & Wisdom")
  }else if (filteredClassChoice[0].name == "Sorcerer"){
    setRecommendedStats("Recommended Abilities: Charisma & Dexterity")
  }else if (filteredClassChoice[0].name == "Warlock"){
    setRecommendedStats("Recommended Abilities: Charisma & Dexterity")
  }else if (filteredClassChoice[0].name == "Wizard"){
    setRecommendedStats("Recommended Abilities: Intelligence & Dexterity")
  }else if (filteredClassChoice[0].name == "Warlock"){
    setRecommendedStats("Recommended Abilities: Charisma & Dexterity")
  } else setRecommendedStats("null")
  // setUserRaceChoice
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
            {userRaceChoice!= false ? <h2>Race: {userRaceChoice[0].name}</h2> : <></>}
            {userClassChoice!= false ? <h2>Class: {userClassChoice[0].name}</h2> : <></>}
            {/* {recommendedStats !== "" ? <h2>{recommendedStats}</h2> : <></>} */}
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
