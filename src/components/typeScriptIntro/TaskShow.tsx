import React from "react"

interface TaskShowProps {
    title: string,
    complete: boolean
}

const TaskShow = ({title, complete}: TaskShowProps) => {
    return <>{title} - {complete ? 'done': 'notDone'}</>
}

{/* <TaskShow title="1" complete={true} /> */}

interface CarProp{
    name: string,
    year: number,
    setName: (newName: string) => void,
}

function car(car){
    return car
}

const camaro : CarProp = { name: 'tes', year: 2020, setName(name:string){this.name=name} }
camaro.setName('fd')

// const camaro2 : CarProp = { name: 'tes2', year: '2020' }

// console.log(car(camaro),car(camaro2))

export default TaskShow