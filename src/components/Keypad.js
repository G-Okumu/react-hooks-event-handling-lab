// Code Keypad Component Here
import React from "react";

function Keypad(){
    function changeMe(){
        return console.log("Entering password...");
    }
    return (
        <>
            <input type="password" onChange={changeMe} placeholder="Enter Password" required/>
        </>
    )
}

export default Keypad;
