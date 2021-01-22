import React, {useEffect} from 'react';
import './Footer.css';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import {Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { useDataLayerValue } from '../DataLayer';


function Footer({spotify}) {

const [{token, item, playing}, dispatch] = useDataLayerValue();

return (
<div className="footer">
  <div className="footer_left">
                <img className="footer_albumCover" 
                src={item?.album.images[0].url} 
                alt={item?.name}/>

            { item ? (
                <div className="footer_songInfo">
                    <h4> {item.name}</h4>
                    <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                </div>
            ) : (
                <div className="footer_songInfo">
                    <h4>No spicy songs playing!</h4>
                    <p>...</p>
                </div>
            )}
 </div>

            <div className="footer_center">
                <ShuffleIcon className="green_footer"/>
                <SkipPreviousIcon /*onClick={SkipPrevious}*/ className="footer-icons"/>

            {playing ? (
                <PauseCircleOutlineIcon
                /*onClick={handlePlayPause}*/
                fontSize="large"
                className="footer-icons"
                />

                ) : (
                
                <PlayCircleOutlineOutlinedIcon
                /*onClick={handlePlayPause}*/
                fontSize="large"
                className="footer-icons"
                />
            )}

                <SkipNextIcon /*onClick={skipNext}*/ className="footer-icons"/>
                <RepeatIcon className="green_footer"/>

            </div>

            <div className="footer_right">
                <Grid container spacing ={2}>
                    <Grid item>
                        
                        <PlaylistPlayIcon/>
                    
                    </Grid>

                    <Grid item>

                        <VolumeDownIcon/>

                    </Grid>

                    <Grid item xs>

                        <Slider aria-labelledby="continuous-slider" />

                    </Grid>
                    









                </Grid>


            </div>
        </div>

    );
}

export default Footer;
