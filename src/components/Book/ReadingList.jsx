import React from "react";
import BookCard from "./BookCard";


const ReadingList = ({book, handleDelete, handleNewEdit}) => {
    return (
        <div className="flex flex-wrap gap-2 m-2">
            {book.length > 0 && book.map((book,index) => {
                return <BookCard key={index} book={book} handleDelete={handleDelete} handleNewEdit={handleNewEdit}/>
            })}
        </div>
    )

}

export default ReadingList