import { useState } from 'react';

function UserForm(props){

    const [userClassChoice, setUserClassChoice] = useState('placeholder');

    const handleUserClassChoice = (e) => {
        setUserClassChoice(e.target.value)
    }

    return(
            // as you add more dropdowns, add more arguments to this onSubmit function
            <form className="dropdown-menus" onSubmit={(e) => {props.generateSheet(e, userClassChoice)}}>
                <select name="class-choice" id="class-choice" value={userClassChoice} onChange={handleUserClassChoice}>
                    <option value="placeholder" disabled>Pick a Class</option> 
                    {props.classes.map((e) => {
                        return(
                            <option value={e.name} key={e.index}>{`${e.name}`}</option>
                        )
                    })}
                </select>
                <button type="submit">Generate Character Sheet</button>    
            </form>
    )  
}

export default UserForm;


