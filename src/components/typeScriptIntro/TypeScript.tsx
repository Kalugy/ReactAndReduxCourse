import React from "react"

function TypeScript() {

    const color: string = 'red'
    const isRed: boolean = color === 'red'
    const age: number = 25
    const colors: string[] = ['red', 'green', 'blue']
    const areColorRed : boolean [] = [true, false]
    const ages: number [] = [1,2]

    function add(a: number,b: number) : number {
        return a + b
    }

    function printColors(colors: string[]){
        console.log(colors)
    }
    //printColors(['fff','fff'])
    const hours = 1
    const test = 'string'

    interface Car{
        year: number,
        model: string,
        number: string
    }

    function formatCar(car: Car){
        return 'Year is ' + car.year + ' model' + car.model + ' number' + car.number 
    }
    //formatCar({year: 2021, model:'12', number:'1'})

    
    return (
      <div className="pt-28">
        dsafds
      </div>
    )
  }
  
  export default TypeScript
  