import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserForm from './UserForm';

function App() {

  const [classes, setClasses] = useState([])
  const [userClassChoice, setUserClassChoice] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios({
      url:"https://www.dnd5eapi.co/api/classes/",
      method: "GET",
      dataResponse: "json",
    }).then((res)=>{
      setClasses(res.data.results)
      setIsLoading(false)
      });
    }, []);

    // as you add more dropdowns, add more arguments to this
const generateSheet = (e, classChoice ) =>{
  e.preventDefault();
  // create copy of classes with a ... spread
  // const of userClassChoice and filter through classes and return classes.name === classChoice
  // create new state for user class choice, setUserClassChoice with the filtered results
  const copyOfClassesData = [...classes]
  const filteredClassChoice = copyOfClassesData.filter((characterClass =>{
    return characterClass.name === classChoice
  }))
  setUserClassChoice(filteredClassChoice)
}
console.log(userClassChoice)
  return (
    <div className="App">
      <UserForm
      classes = {classes}
      generateSheet ={generateSheet}
      />
            {/* add component for sheetGenerator
                pass all filtered results from generateSheet function into props for sheetGenerator
             */}
      <div>
        {userClassChoice != false ? <h2>{userClassChoice[0].name}</h2> : <></>}
      </div>
    </div>
  );
}

export default App;


// set state for 