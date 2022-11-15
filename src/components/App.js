import React from "react";
import "./css/App.css";
import NavBar from "./NavBar";
import SongListHeader  from "./SongListHeader";
import SongDetail from "./SongDetail";



const App = () => {
    return(
        <React.Fragment>
            <NavBar />
            <SongListHeader/>
            
            <a href="#focused" id="focus-link" hidden>
                Go to playing element
            </a>
        </React.Fragment>
    );
};

export default App;