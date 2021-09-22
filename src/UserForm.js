import { useState } from 'react';

function UserForm(props){

    const [userClassChoice, setUserClassChoice] = useState('placeholder');
    const [userRaceChoice, setUserRaceChoice] = useState('placeholder')

    const handleUserClassChoice = (e) => {
        setUserClassChoice(e.target.value)
    }

    const handleUserRaceChoice = (e) => {
        setUserRaceChoice(e.target.value)
    }

    return(
            // as you add more dropdowns, add more arguments to this onSubmit function
            <form className="generator-form" onSubmit={(e) => {props.generateSheet(e, userClassChoice, userRaceChoice)}}>
                <div className="dropdown-menus">
                    <select name="class-choice" id="class-choice" value={userClassChoice} onChange={handleUserClassChoice}>
                        <option value="placeholder" disabled>Pick a Class</option> 
                        {props.classes.map((e) => {
                            return(
                                <option value={e.name} key={e.index}>{`${e.name}`}</option>
                            )
                        })}
                    </select>
                    <select name="race-choice" id="race-choice" value={userRaceChoice} onChange={handleUserRaceChoice}>
                        <option value="placeholder" disabled>Pick a Race</option> 
                        {props.races.map((e) => {
                            return(
                                <option value={e.name} key={e.index}>{`${e.name}`}</option>
                            )   
                        })}
                    </select>
                </div>
                <button type="submit">Generate Character Sheet</button>    
            </form>
    )  
}

export default UserForm;


