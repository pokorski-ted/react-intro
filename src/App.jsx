import { Car } from "./Comps/Car/Car";
import "./global.css";

export function App(){

    function hello(){
        alert("hi from the <App/> app");
    }

    return (
        <div>
            <p onClick={hello}>I am the {"<App/>"}</p>
            <Car onCarClick={hello}/>
        </div>
    );
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