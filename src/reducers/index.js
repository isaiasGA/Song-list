//import redux library
import { combineReducers } from "redux";

//Reducers

const songsReducer = () => {
  return [
    {
      title: "Already Gone",
      duration: "2:54",
      img:
        "https://img.discogs.com/YEaJrGfVih94bdH2Xx4Wvb4Xm1U=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4176106-1357750441-2821.jpeg.jpg"
    },
    {
      title: "Exilio",
      duration: "3",
      img:
        "https://img.discogs.com/4RLLShkQZA-RMRGXz-7SzKpOxLA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3308527-1325097776.jpeg.jpg"
    },
    {
      title: "Ciudades Invisibles",
      duration: "4:05",
      img:
        "https://http2.mlstatic.com/zoe-programaton-2-lp-vinil-D_NQ_NP_897404-MLM28506771668_102018-Q.jpg"
    },
    {
      title: "All the Rage Back Home",
      duration: "3:30 ",
      img:
        "https://upload.wikimedia.org/wikipedia/en/a/a2/Interpol_-_El_Pintor_cover_art.jpg"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

//We combined our 2 reducers into one component that we will then use in our src = index.js
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
