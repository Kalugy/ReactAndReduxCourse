import { createRandomSong } from "./data";

import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../../store";

function SongPlaylist() {
  const songPlaylist = useSelector((state)=>{
    return state.songs
  });

  const dispatch = useDispatch();


  const handleSongAdd = (song) => {
    // To Do:
    // Add song to list of songs
    dispatch(addSong(song))
  };
  const handleSongRemove = (song) => {
    // To Do:
    dispatch(removeSong(song))
    // Remove song from list of songs
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
