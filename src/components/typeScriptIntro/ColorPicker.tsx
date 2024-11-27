import React from "react";

interface ColorPickerProps {
    color: string[],
    handleColor: (color:string) => void;
}

interface ColorPickerProps2 extends ColorPickerProps{
    //inherit all parent definitions
}

function ColorPicker ({color, handleColor}:ColorPickerProps2){
    const renderedColors = color.map((color) => {
        return <button key={color} onClick={()=>handleColor(color)}>{color}</button>
    })

    return <div>{renderedColors}</div>
}

<ColorPicker color={['red','blue']} handleColor={(color)=>console.log(color) }  ></ColorPicker>