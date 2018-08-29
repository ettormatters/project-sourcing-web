export const INITPOSTS = 'INITPOSTS';
export function initPosts(posts) {
    return {
        type: INITPOSTS,
        init: posts
    };
}

export const SELECTSORT = 'SELECTSORT';
export function selectSort() {
    return {
        type: SELECTSORT
    };
}

export const LISTSORT = 'LISTSORT';
export function listSort(_list, _array, _posts) {
    return {
        type: LISTSORT,
        newList: _list,
        newArray: _array,
        newPosts: _posts
    };
}