// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function focus(){
        return console.log("Good!");
    }
    function blur(){
        return console.log("Hey! Eyes on me!");
    }



    return (
        <>
        <button type="submit" onFocus={focus} onBlur={blur}>Eyes on me</button>
        </>
    )
}

export default EyesOnMe;
