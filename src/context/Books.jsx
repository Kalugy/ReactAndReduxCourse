import { createContext, useState } from "react";

import { getBooks, createBook, updateBook, deleteBook } from "../api/book"
import { fetchImages } from "../api/api"


const BooksContext = createContext();

const BookProvider = ({children}) => {
    const [book, setBook] = useState([])

    const getNewBooks = async () => {
        const books = await getBooks();
        setBook(books);
    };

    const CreateBook = async (text) => {
        const data = await fetchImages(text);
        const newBook = {
            id: Date.now().toString(),
            name: text,
            image: data.results[0].urls.small
        }
        const newBooks = await createBook(newBook);
        setBook([...book, newBooks])
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

    const sharingFunctions = {
        book,
        handleNewEdit,
        handleDelete,
        CreateBook,
        getNewBooks
    }
    return (
        <BooksContext.Provider value={sharingFunctions}>
            {children}
        </BooksContext.Provider >
    )
}
export { BookProvider }

export default BooksContext;