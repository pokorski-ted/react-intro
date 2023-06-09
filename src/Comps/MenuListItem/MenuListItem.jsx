import { useState } from "react";
import s from "./style.module.css";

export const MenuListItem = (props) => {
const [isHovered, setIsHovered] = useState(false);

function activate(){
    setIsHovered(true);
}

function deactivate(){
    setIsHovered(false);
}

function getBackgroundColor(){
    if (isHovered){
        return "#a5e9ff";}
    else {
        if(props.isSelected){
            return "#26baea";
        }
        else
            return "#eff0ef";}
}

function onItemClick(){
    props.onClick(props.difficulty)
}
    return (
    <div 
        onClick={onItemClick}
        className={s.container}
        onMouseEnter={activate} 
        onMouseLeave={deactivate}
        style={{ backgroundColor: getBackgroundColor() }}
    >
        Set To: {props.difficulty}
    </div>
    );
};