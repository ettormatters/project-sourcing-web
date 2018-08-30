import { INITPOSTS, LISTSORT, SELECTSORT } from '../actions/action';
import { combineReducers } from 'redux';

const initObj = {
    order : [
        { id: "recent", text: "Recently" },
        { id: "high-clapped", text: "High Clapped" },
        { id: "d-day", text: "D-Day" },
        { id: "verified", text: "Verified" }
    ],
    list : [
        { id: "0", val: "somethingNew", text: "Something New", checked:false },
        { id: "1", val: "side-project", text: "Side Project", checked:false },
        { id: "2", val: "club", text: "Club", checked:false },
        { id: "3", val: "competition", text: "Competition", checked:false },
        { id: "4", val: "study", text: "Study", checked:false },
        { id: "5", val: "business", text: "Business", checked:false },
        { id: "6", val: "body-training", text: "Body Training", checked:false },
        { id: "7", val: "music", text: "Music", checked:false },
        { id: "8", val: "video",text: "Video", checked:false },
        { id: "9", val: "art", text: "Art", checked:false },
        { id: "10", val: "travel", text: "Travel", checked:false },
        { id: "11", val: "game", text: "Game", checked:false },
        { id: "12", val: "activity", text: "Activity", checked:false }
    ],
    posts : [],
    checkArray : [0,0,0,0,0,0,0,0,0,0,0,0,0]
}

const homebase = (state = initObj, action) => {
    switch(action.type) {
        case INITPOSTS:
            return Object.assign({}, state, {
                posts: action.init
            });
        case SELECTSORT:
            return Object.assign({}, state, {
                list: action.updList,
                checkArray: action.updArray,
                posts: action.updPosts
            });
        case LISTSORT:
            return Object.assign({}, state, {
                list: action.updList,
                checkArray: action.updArray,
                posts: action.updPosts
            });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const partyApp = combineReducers({
    homebase,
    extra
});

export default partyApp;
