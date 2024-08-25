import logo from './logo.svg';
import './App.css';
import Playlist from "../Playlist/Playlist";
import SearchBar from ".//SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify "../uitl/Spotify";


class App extends React.Component{
  constructor(props){
    super(props);

this.state={
  SearchResults: [],
PlaylistName: "NewPlaylist",
PlaylistTracks: []
}

this.search=this.seacrch.bind(this);
this.addTrack=this.addTrack.bind(this);
this.removeTrack=this.removeTrack.bind(this);
this.updatePlaylistName=this.updatePlaylistName.bind(this)
this.savePlaylist=this.savePlaylist.bind(this)
this.removeTrackSearch=this.removeTrackSearch.bind(this)
this.doThese=this.doThese.bind(this);
};



}






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
