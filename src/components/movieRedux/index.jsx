
import MoviePlaylist from "./MoviePlaylist";
import SongPlaylist from "./SongPlaylist";

import { useDispatch } from "react-redux";
import { resetAll } from "../../store";

function App() {

    const dispatch = useDispatch();
    const handleResetClick = () => {
      dispatch(resetAll());
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
  