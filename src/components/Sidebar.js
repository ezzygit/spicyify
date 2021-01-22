import React from 'react';
import "./Sidebar.css";
import spiceifyjs from './spiceifyjsfinal1.png';
import Sidebaroption from './Sidebaroption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDataLayerValue } from '../DataLayer';


function Sidebar() {

 const [{playlists}] = useDataLayerValue ();


    return (
        <div className="sidebar">
           <img className="sidebar__logo" 
           src={spiceifyjs}
           alt=""/>

        <Sidebaroption Icon={HomeIcon} title="Home"/>
        <Sidebaroption Icon={SearchIcon} title="Spicy Search"/>
        <Sidebaroption Icon={LibraryMusicIcon} title="Your Spicy Library"/>

        <br/>
        
        <strong className="sidebar__title">PLAYLISTS</strong>
        <Sidebaroption Icon={AddIcon} title="Create A Spicy Playlist"/>
        <Sidebaroption Icon={FavoriteBorderIcon} title="Fave Spicy Songs"/>

        <hr/>

        {playlists?.items?.map(playlist => (
        <Sidebaroption title={playlist.name}/>
        ))}
        

        </div>
    )
}

export default Sidebar;
