import React from 'react'
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from '../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {
const [{ cnmaster_playlist }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            
         <Header spotify={spotify} />
        
            <div className="body_info">
              
              <img src={cnmaster_playlist?.images[0].url} alt="CNMaster"/>
              
              <div className="body_infotext">

                   <strong>COLLABORATIVE SPICY PLAYLIST</strong>
                   <h2>CN Master Playlist</h2>
                   <p>{cnmaster_playlist?.description}</p>
             </div>
         </div>

              <div className="body_songs">
                  <div className="body_icons">
                      <PlayCircleFilledIcon className="bodyshuff" /*onClick={playPlaylist}*//>
                      <FavoriteIcon fontSize="large"/>
                      <MoreHorizIcon/>
                 </div>
                  
                 {cnmaster_playlist?.tracks.items.map(item => (
                     <SongRow /*playSong={playSong}*/ track={item.track}/>


                 ))}
              </div>
          



        </div>
    );
}

export default Body;
