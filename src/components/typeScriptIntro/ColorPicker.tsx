import { Value } from "classnames";
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

interface Image{
    src: string
}

interface ProfileProp{
    likes: string[]
}

interface User{
    username: string,
    profile?: ProfileProp,
}
type User2 = {
    username: string,
    profile?: ProfileProp,
}
//type can not inherit or extents from another interaces
type Value =  string | number | string[]| Image

function logOut(value?: Value){

    if(typeof value === 'string'){
        value.toUpperCase()
    }


}
logOut('ff')
logOut(123)
logOut(['ff','fdfd'])
logOut({src: 'test.png' } )