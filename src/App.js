import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserForm from './UserForm';
import DropdownContainer from './components/DropdownContainer'

function App() {

  const [classes, setClasses] = useState([])
  const [userClassChoice, setUserClassChoice] = useState([])
  const [races, setRaces] = useState([])
  const [userRaceChoice, setUserRaceChoice] = useState([])
  const [recommendedStats, setRecommendedStats] = useState("")

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
  } else setRecommendedStats(null)
  
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
          <p className="description">Select from the dropdowns to start creating your character for D&D 5E!</p>
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
            {userRaceChoice!= false ? <h2>Race: {userRaceChoice[0].name}</h2> : null}
            {userClassChoice!= false ? <h2>Class: {userClassChoice[0].name}</h2> : null}
            {recommendedStats !== "" ? <h2>{recommendedStats}</h2> : null}
            {userRaceChoice!= false ? 
            <div>
              <DropdownContainer
            userClass ={userClassChoice}
            userRace ={userRaceChoice}
            />
            </div> : null}
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

// Currently Working on:
// Error handling (user only picks one of race/class)
// Dropdown Container component (and statsCard and Basket) that appears when player has chosen race and class (drag and drop)
  // Figure out how to only accept one drop in react-dnd
  // Pull the dropped item into a new state to push out
  // Add racial bonuses


// What to add:
// Remove recommended abilities
// Add Background selector (dropdown)
// Skills & proficiencies
// Add spells (drag and drop?)
// Feat selector
// Alignment Selector
// Firebase support
