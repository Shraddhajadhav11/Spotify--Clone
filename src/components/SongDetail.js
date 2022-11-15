import React from "react";
import {connect} from "react-redux";
import { SelectorSong, selectSongById } from "../actions";

const SongDetail =({
    selectedSongId = -1,
    defaultSong,
    selectSong,
    songs,
}) => {
    const songData = () =>{
        if(selectedSongId >= 0){
            return(
                <>
                   <div className="now-playing">
                        <div id="active">
                           <strong>Now Playing</strong>
                        </div>
                        <div className="header">{songs[selectSongById].name}</div>
                    </div>
                    <div className="album-img">

                    </div>
                    <div className="artist-img">
                        <img
                           src={songs[selectSongById].link.images[0].url} 
                           alt={songs[selectSongById].author}
                        />
                        <p className="artist-name">{songs[selectSongById].author}</p>
                    </div>
                </>
            );
        }else{
            selectSong(defaultSong);
            return null;
        }
    };
    return(
        <div className="song-detail" style={{backgroundImage:`ulr(${songs}[selectedSongId].links.images[1].url})`,}}>
            {songData()}


        </div>
    );
};
const mapStateToprops = (state) => {
    return{
        selectSongById: state.selectSongById,
        defaultSong: state.songs[0],
        songs: state.songs,
    };
};

export default connect(mapStateToprops,{ selectSong: selectSong})(SongDetail);
