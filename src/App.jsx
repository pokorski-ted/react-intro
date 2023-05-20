import { useState } from "react";
import { Car } from "./Comps/Car/Car";
import { DisplayDifficulty } from "./Comps/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./Comps/MenuList/MenuList";
import s from "./style.module.css";

export function App(){
const [currentDifficulty, setCurrentDifficulty] = useState("High");

function onMenuListItemClick(difficulty){
    setCurrentDifficulty(difficulty);
};

    return (
    <div>
        <h1>Select Your Difficulty Choice</h1>
       <div className={s.workspace}>
        <MenuList onItemClick={onMenuListItemClick} difficulty={currentDifficulty}/>
        <DisplayDifficulty difficulty={currentDifficulty}/>
       </div>
    </div>

);
    /*function hello(){
        alert("hi from the <App/> app");
    }

    return (
        <div>
            <p onClick={hello}>I am the {"<App/>"}</p>
            <Car onCarClick={hello}/>
        </div>
    
    );
    */

    /*return (
        <div style={{
            height:100, 
            width:100, 
            backgroundColor: 1==2 ? "red" : "orange", 
            border:"3px solid blue"
        }}>
        </div>
    );*/
}