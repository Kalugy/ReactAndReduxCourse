import React from "react";
import BookCard from "./BookCard";


import { useBookContext } from "../../hooks/useBookContext";
const ReadingList = () => {
    const { book } = useBookContext()

    return (
        <div className="flex flex-wrap gap-2 m-2">
            {book.length > 0 && book.map((book) => {
                return <BookCard key={book.id} book={book} />
            })}
        </div>
    )

}

export default ReadingList