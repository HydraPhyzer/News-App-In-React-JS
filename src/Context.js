import React, { createContext, useContext ,useEffect,useReducer} from 'react'
import { Reducer } from './Components/Reducer';

const AppContext = createContext();

const Context = ({ children }) => {

    let API='https://hn.algolia.com/api/v1/search?';

    let Initial=
    {
        isLoading:true,
        nbPages:0,
        page:0,
        query:"",
        hits:[],
    }
    let FetchAPI=async(APIAdress)=>
    {
        try
        {
            await fetch(APIAdress)
            .then((Res)=>
            {
                return Res.json() ;
            })
            .then((Data)=>
            {
                dispatch({
                    Type:"GET_NEWS",
                    Payload:{
                        HitsArray:Data.hits,
                        NbPages:Data.nbPages,
                    }
                });
            })
        }
        catch
        {
            alert("Error Occurred , Please Try Again !!")
        }
    }

    const [state, dispatch] = useReducer(Reducer,Initial);

    let Next=()=>
    {
        dispatch({
            Type:"NEXT_PAGE"
        })
    }
    let Prev=()=>
    {
        dispatch({
            Type:"PREV_PAGE"
        })
    }
    let Remove=(ID)=>
    {
        dispatch({
            Type:"REMOVE",
            Payload:{
                ID,
            }
        })
    }
    let Search=(value)=>
    {
        dispatch({
            Type:"SEARCH",
            Payload:{
                Text:value
            }
        })
    }

    useEffect(() => {
        let Adress=`${API}query=${state.query}&page=${state.page}`;
        FetchAPI(Adress);
    }, [state.page,state.query])
    
    return (

        <AppContext.Provider value={{...state , Next ,Prev,Remove,Search }}>
        {children}
        </AppContext.Provider>
    );
};


const useGlobalContext = () => {
    return useContext(AppContext)
};
export {AppContext, useGlobalContext, Context}