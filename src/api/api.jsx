
const ACCESSKEY = import.meta.env.VITE_ACCESSKEY;  

const searchImg = async () => {
    const response = await fetch(`https://picsum.photos/seed/${text}/600/400`) 
    console.log(response.url)
    return response.url
}

export const fetchImages = async (text) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${text}&client_id=${ACCESSKEY}&per_page=5`
      );
      const data = await response.json();
      return data
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

