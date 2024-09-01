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
}

search(term){

Spotify.search(term).then (SearchResults => {
this.setState({ SearchResults: SearchResults});

});

}

addTrack(track){
let tracks= this.state.PlaylistTracks;
if(tracks.find(savedTrack => savedTrack.id === track.id)){
return;
}
tracks.push(Track);
this.setState({PlaylistTracks: tracks});
}

removeTrack(Track){
  let tracks = this.state.PlaylistTracks;
  let trackSearch = this.state.SearchResults;
  tracks=tracks.filter(currentTrack => currentTrack.id !== track.id);
  trackSearch.unshift(track);
  this.setState({PlaylistTracks: tracks})
}

removeTrackSearch(Track){
  let tracks= this.state.SearchResults;
  tracks=tracks.filter(currentTrack => currentTrack.id !== track.id);
  this.setState({SearchResults: tracks});

}
doThese(Track){
  this.addTrack(track);
  this.removeTrackSearch(track);
}
updatePlaylistName(name){
  this.setState({updatePlaylistName: name}); 
}

savePlaylist(){
  const trackUris = this.state.PlaylistTracks.map(track => track.uri);
  Spotify.savePlaylist(this.state.PlaylistName,trackUris).then (() => {
    this.setState ({
      updatePlaylistName: "NewPlaylist" ,
      PlaylistTracks: []
    });
  
});

}



function App() {
  return (
   <div>
   <h1>
   <a href="http://localhost:3000">Musicophile</a>
   </h1>
   <div> className ="App">    
   <SearchBar onSearch={this.seaech} />
   <div className= "App-Playlist">
   <SearchResults SearchResults = {this.state.SearchResults} onAdd={this.doThese}/>
   
   <Playlist PlaylistTracks={this.state.PlaylistTracks} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onSave={this.savePlaylist} />
   </div>
   </div>
   </div>
  );
}

export default App;
