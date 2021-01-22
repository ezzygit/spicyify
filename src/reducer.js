export const initialState = {
    user: null,
    cnmaster_playlist: null,
    playlists: [],
    playing: false,
    item: null,
    spotify:null,
    // null value after finishing main page develop PUBLIC ID KEY DONT NEED TO HIDE X //
    // token: 'BQBYASakwpDO6De3BnDzA0Q2Xy5ru1ZwynpU-39cRU8SSNl-4UPwZAg0GIFXhi4MwMMM3h-NK-BtrhJMgT7vIwu8d5OjYOvplVAza4HN_uT4O88XQKbznfbO-1RbkamJnkqUt2JUfWwU0plPDuk4YOirO2sj',
}

const reducer = (state, action) => {

console.log(action);

switch(action.type) {

    case "SET_USER" :
        return {
     ...state,
      user: action.user    
    };

    case "SET_PLAYING":
    return {
        ...state,
        playing: action.playing,
    };

    case "SET_ITEM":
    return {
        ...state,
        item: action.item,
    };

    case "SET_TOKEN":
    return {
     ...state,
     token: action.token,
    };

    case "SET_PLAYLISTS":
    return {
    ...state,
    playlists: action.playlists,
    };

    case "SET_CNMASTER_PLAYLIST":
    return {
    ...state,
    cnmaster_playlist: action.cnmaster_playlist,
    };

    case "SET_SPOTIFY":
    return {
        ...state,
        spotify: action.spotify,
    };


    default:
        return state;

}
};

export default reducer;