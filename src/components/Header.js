import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer';

function Header() {

  const [{user}] = useDataLayerValue();  

    return (
        <div className="header">
            <div className="left_header">
                <SearchIcon/>

            <input
                placeholder="Search for your favourite spicy tunes!"
                type="text" />
                
            </div>

            

            <div className="right_header">

                <p className="spicysayings">You're a spicy one 🌶️</p>
                
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>


                <h4>{user?.display_name}</h4>





            </div>



        </div>
    );
}

export default Header;
