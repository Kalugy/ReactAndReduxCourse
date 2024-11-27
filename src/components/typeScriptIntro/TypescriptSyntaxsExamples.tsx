import React from "react"

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
type Value =  string | number | string[] | Image

function logOut(value?: Value){

    if(typeof value === 'string'){
        value.toUpperCase()
    }


}
logOut('ff')
logOut(123)
logOut(['ff','fdfd'])
//logOut({src: 'test.png' } )

function wrapInArray(value: string): string[] {
    return [value]
}
//Generetics
function wrapInArray2<TypeToWrap>(value: TypeToWrap): (TypeToWrap)[] {
    return [value]
}
function wrapInArray3<T>(value: T): (T)[] {
    return [value]
}
const results = wrapInArray2('ff')
const results2 = wrapInArray2(22)


function toRecord <T, T1> (id: T,value: T1){
    return {
        id,
        value
    }
}

const results23 = toRecord<number, string>(123,'fff')
const results24 = toRecord<string, number[]>('123',[1,2,3])

function test3 <T> (array: T[]){
    const random = Math.floor(Math.random() * array.length ) 
    return array[random]
}

const a = test3([1,2,3])
const b = test3(['1','2','3'])

//fetch example
interface User{
    username: string
}
interface Message{
    content: string
}
interface Image{
    url: string
}

async function fetchData <T>(path: string ){
    const rest = await fetch(path)
    const json = await rest.json()

    return json as T
}

const run = async () => {
    const user = await fetchData<User>('/test')
    const message = await fetchData<Message>('/message')
}


function test2 <T> (array: T[]){
    const random = Math.floor(Math.random() * array.length ) 
    return array[random]
}

const a2 = test2([1,2,3])
const b2 = test2(['1','2','3'])  //inference
