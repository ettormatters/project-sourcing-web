import { request } from 'graphql-request'

export async function updateByList (checkArray, state) {
    let updateArray = [];

    for(let i in checkArray) {
        if(checkArray[i]==1) {
            updateArray.push(state.list[i].text);
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