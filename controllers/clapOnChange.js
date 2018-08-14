import { request } from 'graphql-request'

export async function clapOnChange  (event) {
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