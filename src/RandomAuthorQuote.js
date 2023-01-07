import { Quote } from "./common.styled";
import {RandomAuthorQuoteDiv} from "./RandomAuthorQuote.styled";
import ApiContext from "./api-context";
import { useContext } from "react";

const RandomAuthorQuote=()=>{
    const context=useContext(ApiContext);
    const quotesList=context.getAuthorQuotes.length>0 && context.getAuthorQuotes.map((quote)=>{
        return <Quote key={quote.id}>{quote.content}</Quote>;
    });
    
    return (
        <RandomAuthorQuoteDiv>
            {quotesList.length>0 && <p>{context.quoteData.author}</p>}
            {quotesList.length>0 ? quotesList:'Generate a Random Quote '}
        </RandomAuthorQuoteDiv>
    )
}

export default RandomAuthorQuote;