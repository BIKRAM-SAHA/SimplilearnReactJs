import React from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      searchResult:[],
      playlistName: "New Playlist",
      playlistTracks:[]
    }
    this.search=this.search.bind(this);
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.removeTrackSearch=this.removeTrackSearch.bind(this);
    this.doThese=this.doThese.bind(this);
  }
  
  search(item){
    Spotify.search(item).then(SearchResults =>{
      this.setState({searchResult:SearchResults})
    })
  }
  addTrack(track){
    let tracks=this.state.playlistTracks
    if (tracks.find(savedTracks=>savedTracks.id === tracks.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks:tracks})
  }
  removeTrack(track){
    let tracks=this.state.playlistTracks;
    let trackSearch=this.state.trackSearch;
    tracks=tracks.filter(currentTrack => currentTrack.id!==track.id);
    trackSearch.unshift(track);
    this.setState({playlistTracks:tracks});
  }
  removeTrackSearch(track){
    let tracks=this.state.searchResult
    tracks=tracks.filter(currentTrack=>currentTrack.id!==track.id)
    this.setState({SearchResults:tracks})
  }
  doThese(track){
    this.addTrack(track);
    this.removeTrackSearch(track);
  }
  updatePlaylistName(name){
    this.setState({playlistName:name});
  }
  savePlaylist(){
    const trackUris=this.state.playlistTracks.map(track=>track.uri);
    Spotify.savePlaylist(this.state.playlistName,trackUris).then(()=>{
      this.setState({
        updatePlaylistName:"New Playlist",
        playlistTracks:[]
      })
    })
  }
  render(){
    return (
      <div>
        <h1>
          <a href='http://localhost:3000'>Musicophile</a>
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className='App-playlist'>
            <SearchResults SearchResults={this.state.searchResult} onAdd={this.doThese}/>
            <Playlist playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
