import { useContext } from "react"
import BooksContext from "../context/Books"

export const useBookContext = () => {
    return useContext(BooksContext);
}