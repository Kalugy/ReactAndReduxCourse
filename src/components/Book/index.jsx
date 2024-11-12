import React, { useEffect, useState } from "react";
import AddBook from "./AddBook";
import ReadingList from "./ReadingList";
import { fetchImages } from "../../api/api"
import { getBooks, createBook, updateBook, deleteBook } from "../../api/book"

const App = () => {
    const [book, setBook] = useState([])
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        CreateBook();
    }

    const getNewBooks = async () => {
        const books = await getBooks();
        setBook(books);
    };

    useEffect(() => {
        getNewBooks();
    }, []);

    const CreateBook = async () => {
        const data = await fetchImages(text);
        const newBook = {
            id: Date.now().toString(),
            name: text,
            image: data.results[0].urls.small
        }
        const newBooks = await createBook(newBook);
        setBook([...book, newBooks])
        setText('')
    }

    const handleDelete = async (bookD) => {
        await deleteBook(bookD)
        const newBooks = book.filter(b => b.name != bookD.name)
        setBook(newBooks)
    }

    const handleNewEdit = async (editBook, newName) => {
        const edit = await updateBook(editBook, { "name" : newName });
        const newBooks = book.map( b =>{
            if(b.id === editBook.id){
                return {...b, ...edit}
            }
            return b
        })

        setBook(newBooks)
    }

    return (
        <div className="min-h-screen bg-slate-800 text-white flex flex-col justify-center ">
            <AddBook handleSubmit={handleSubmit} text={text} setText={setText}/>
            <ReadingList book={book} handleDelete={handleDelete} handleNewEdit={handleNewEdit}/>
        </div>
    )

}

export default App