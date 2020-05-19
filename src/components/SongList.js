//Second way of definning a class, by importing {Component}
import React, { Component } from "react";
//We use 'connect' to connect with the 'Provider' component in our index.js file in order to access the action that has all of the songs/
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  //renderList will map over the songs and return a JSX code
  renderList() {
    return this.props.songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            onClick={() => this.props.selectSong(song)}
            className="ui button primary"
          >
            Select
          </button>
        </div>
        <img className="content-img" src={song.img} alt={song.title} />
        <div className="content-title">{song.title}</div>
      </div>
    ));
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//By convention, we call this function 'mapStateToProps'
//This function will connect to our 'connect' function in order to get data from "Provider's store"
//This function will run eachtime with the newly created state object. Our state or click on the 'select' button
const mapStateToProps = state => {
  //tHIS Object wll show up as 'props' in our 'SongList' component
  return { songs: state.songs };
};
//We are doing 2x invocation because conect() has an inside function () where we want to put "SongList"
export default connect(
  mapStateToProps,
  { selectSong: selectSong }
)(SongList);
