
import MoviePlaylist from "./MoviePlaylist";
import SongPlaylist from "./SongPlaylist";

function App() {
    const handleResetClick = () => {
      //
    };
    return (
      <div className="h-screen bg-gray-800 text-white flex items-center justify-center">
        <div>
          <button onClick={() => handleResetClick()} className="button is-danger">
            Reset Both Playlists
          </button>
          <hr />
          <MoviePlaylist />
          <hr />
          <SongPlaylist />
        </div>
      </div>
    )
  }
  
  export default App
  