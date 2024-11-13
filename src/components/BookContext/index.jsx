import React, { useContext, useEffect, useState } from "react";
import AddBook from "./AddBook";
import ReadingList from "./ReadingList";

import BooksContext from "../../context/Books";

const App = () => {
    const { getNewBooks } = useContext(BooksContext);

    useEffect(() => {
        getNewBooks();
    }, []);

    return (
        <div className="min-h-screen bg-slate-800 text-white flex flex-col justify-center ">
            <AddBook />
            <ReadingList /> 
        </div>
    )

}

export default App