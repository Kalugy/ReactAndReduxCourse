import React, { useState } from "react";
import AddBook from "./AddBook";
import ReadingList from "./ReadingList";
import { fetchImages } from "../../api/api"

const App = () => {
    const [book, setBook] = useState([])
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        CreateBook();
    }
    const CreateBook = async () => {
        const data = await fetchImages(text);
        console.log(data,'dasdasdas')
        const newBook = {
            name: text,
            image: data.results[0].urls.small
        }
        setBook([...book, newBook])
        setText('')
    }

    const handleDelete = (bookD) => {
        const newBooks = book.filter(b => b.name != bookD.name)
        setBook(newBooks)
    }

    const handleNewEdit = (newName, lastName) => {
        const newBooks = book.map( b =>{
            if(b.name === lastName){
                b.name=newName
            }
            return b
        })

        setBook(newBooks)
    }

    console.log(book)
    return (
        <div className="min-h-screen bg-slate-800 text-white flex flex-col justify-center ">
            <AddBook handleSubmit={handleSubmit} text={text} setText={setText}/>
            <ReadingList book={book} handleDelete={handleDelete} handleNewEdit={handleNewEdit}/>
        </div>
    )

}

export default App