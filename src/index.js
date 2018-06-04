import React, { Component } from "react"; //{ component } bcoz otherwise need to write React.Component on 8th line
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoListItem from "./components/video_list_item";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyDnm_5KNf9nH7Sr51HzT8XyUTHWy_t4_XM";

class App extends Component {
  //here 8th line
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({ key: API_KEY, term: "7 wonders of world" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //  this.setState({ videos: videos }); in ES5
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo => this.setState({ selectedVideo }))}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector(".container"));
