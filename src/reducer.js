export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // null value after finishing develop //
    token: 'BQBYASakwpDO6De3BnDzA0Q2Xy5ru1ZwynpU-39cRU8SSNl-4UPwZAg0GIFXhi4MwMMM3h-NK-BtrhJMgT7vIwu8d5OjYOvplVAza4HN_uT4O88XQKbznfbO-1RbkamJnkqUt2JUfWwU0plPDuk4YOirO2sj',
}

const reducer = (state, action) => {

console.log(action);

switch(action.type) {

    case "SET_USER" :
        return {
     ...state,
      user: action.user    
    };

    case "SET_TOKEN":
    return {
     ...state,
     token: action.token,
    };


    default:
        return state;

}
};

export default reducer;