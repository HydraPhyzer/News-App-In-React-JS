let Reducer = (state, action) => {
    switch (action.Type) {
        case "FETCHING":
            return{
                isLoading:true,
            }
        case "GET_NEWS":
            return{
                    ...state,
                    isLoading:false,
                    hits:action.Payload.HitsArray,
                    nbPages:action.Payload.NbPages,
                }
                break;
        case "NEXT_PAGE":
            let pages=state.page+1;
            if(pages>=50)
            {
                return{
                    ...state,
                    page:0
                }
            }
            else{
            return{
                ...state,
                page:pages
            }}
        case "PREV_PAGE":
            let pagess=state.page-1;
            if(pagess<=0)
            {
                return{
                    ...state,
                    page:0
                }
            }
            else{
            return{
                ...state,
                page:pagess
            }}
        case "REMOVE":
            return{
                ...state,
                hits:state.hits.filter((Elem)=>Elem.objectID!=action.Payload.ID),
            }
        case "SEARCH":
            return{
                ...state,
                query:action.Payload.Text,
            }

        default:
            break;
    }
};

export { Reducer }