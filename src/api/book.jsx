
const BOOKAPI = import.meta.env.VITE_BOOKAPI;  


export const getBooks = async () => {
    try {
      const response = await fetch(`${BOOKAPI}/book`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching images:", error);
    }
};

export const createBook = async (book) => {
  try {
    const response = await fetch(`${BOOKAPI}/book`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book)
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create book");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

export const updateBook = async (book, updatedFields) => {
  try {
    const updatedBook = { ...book, ...updatedFields };

    const response = await fetch(`${BOOKAPI}/book/${book.id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBook) // Ensure it's an object
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create book");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

export const deleteBook = async (book) => {
  try {
    const response = await fetch(`${BOOKAPI}/book/${book.id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create book");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};
