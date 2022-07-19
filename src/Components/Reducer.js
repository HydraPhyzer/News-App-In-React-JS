let Reducer = (state, action) => {
    switch (action.Type) {
        case "GET_NEWS":
            return{
                    ...state,
                    hits:action.Payload.HitsArray,
                    nbPages:action.Payload.NbPages,
                }
            break;

        default:
            break;
    }
};

export { Reducer }