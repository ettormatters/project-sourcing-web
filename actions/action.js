import { request } from 'graphql-request'

export const INITPOSTS = 'INITPOSTS';
export function initPosts(posts) {
    return {
        type: INITPOSTS,
        init: posts
    };
}

export const LISTSORT = 'LISTSORT';
export function listSort(_list, _array, _posts) {
    return {
        type: LISTSORT,
        updList: _list,
        updArray: _array,
        updPosts: _posts
    };
}

export const SELECTSORT = 'SELECTSORT';
export function selectSort(_list, _array, _posts) {
    return {
        type: SELECTSORT,
        updList: _list,
        updArray: _array,
        updPosts: _posts
    };
}

export function checkBoxOnChange(event) {
    return async (dispatch,getState) => {
        const { homebase } = getState();

        const boxChecked = event.target.checked;
        const id = event.target.id;

        let _list = homebase.list;
        let _array = homebase.checkArray;
        let _posts = homebase.posts;

        if(boxChecked==true) {
            _list[id].checked = true;

            for(let d in _list) {
                if(_list[d].checked == true) {
                    _array[d] = 1;
                }
            }
            _posts = await dispatch(updateByList(_array));

            dispatch(selectSort(_list, _array, _posts));
        } else {
            _list[id].checked = false;

            for(let d in _list) {
                if(_list[d].checked == false) {
                    _array[d] = 0;
                }
            }

            let cnt = 0;
            for(let i in _array) {
                if(_array[i] == 0){
                    cnt = cnt + 1;
                }
            }

            if(cnt == 13) {
                for(let i in _array) {
                    _array[i] = 1;
                }
                _posts = await dispatch(updateByList(_array));
                for(let i in _array) {
                    _array[i] = 0;
                }
            } else {
                _posts = await dispatch(updateByList(_array));
            }
            
            dispatch(selectSort(_list, _array, _posts));
        }
    }
}

function updateByList (checkArray) {
    return async (dispatch, getState) => {
        const { homebase } = getState();

        let updateArray = [];

        for(let i in checkArray) {
            if(checkArray[i]==1) {
                updateArray.push(homebase.list[i].text);
            }
        }

        let variables = {
            arrStr: updateArray,
        }

        const updateQuery = `
            query UpdatePosts($arrStr: [String]) {
                getUpdatePosts(cateCheck:
                    {category: $arrStr}
                ){
                    partyHead
                    author
                    title
                    data{
                        category
                        oneLine
                        desc
                        hashTag
                        memberNumber
                    }
                    clap
                    date
                }
        }
        `
        const upRes = await request('http://localhost:4000/graphql', updateQuery, variables)
        return upRes.getUpdatePosts;
    }
}

export function clapOnChange(event) {
    return async (dispatch, getState) => {
        let titleStr = event.target.id;
    
        let variables = {
            titleStr: titleStr,
        }

        const clapQuery = `
            mutation UpdateClap($titleStr: String!){
                updateClap (titleInput:
                    {title: $titleStr}
                ){
                    partyHead
                    author
                    title
                    data{
                        category
                        oneLine
                        desc
                        hashTag
                        memberNumber
                    }
                    clap
                    date
                }
            }
        `
        await request('http://localhost:4000/graphql', clapQuery, variables);
        return true;
    }
}