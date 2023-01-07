import { createContext,useEffect,useState } from "react";
import { client } from "./utils";
const ApiContext=createContext({
    quoteData:{},
    runRandomFuntion:()=>{},
    getAuthorQuotes:[],
    getAuthorQuotesFunction:()=>{},
    loading:false
})

const ApiContextProvider=(props)=>{
    const [quoteData,setQuoteData]=useState({});
    const [rerun,setRerun]=useState({isRandomQuote:true,isRandomAuthorQuotes:false});
    const [getAuthorQuotes,setGetAuthorQuotes]=useState([]);
    const [loading,setLoading]=useState(true);
      
    useEffect(()=>{
        if(rerun.isRandomQuote===true){
            (async()=>{
                setLoading(true); 
                let data=await client.get('/random').then(response=>{
                    return response.data;
                });
                setQuoteData({
                    content:data.content,
                    author:data.author,
                    genre:data.tags
                })
                setLoading(false); 
            })();
            setRerun((prev)=>{
                return {...prev,isRandomQuote:false}
            });
        }
    },[rerun.isRandomQuote]);

    useEffect(()=>{
        if(rerun.isRandomAuthorQuotes===true ){
            setLoading(true); 
            (async()=>{
                setLoading(true); 
                let data=await client.get(`/quotes?author=${quoteData.author}&tags=${quoteData.genre[0]}&Max:10`).then(response=>{
                    return response.data;
                });
                setGetAuthorQuotes(data.results);
                setLoading(false); 
            })();
            setRerun((prev)=>{
                return {...prev,isRandomAuthorQuotes:false}
            });
        }
    },[rerun.isRandomAuthorQuotes,quoteData]);

    function runRandomFuntion(){
        setRerun((prev)=>{
            return {...prev,isRandomQuote:true}
        });
    }
    function getAuthorQuotesFunction(){
        setRerun((prev)=>{
            return {...prev,isRandomAuthorQuotes:true}
        });
    }
    return (
        <ApiContext.Provider value={{
            quoteData,
            runRandomFuntion,
            getAuthorQuotes,
            getAuthorQuotesFunction,
            loading
        }}>
        {props.children}
        </ApiContext.Provider>
    );
}

export default ApiContext;
export {ApiContextProvider};


