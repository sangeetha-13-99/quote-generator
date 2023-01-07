import {QuoteDiv,QuoteAuthor} from "./RandomQuote.styled";
import { RoterLink,Quote } from "./common.styled";
import ApiContext from "./api-context";
import { useContext } from "react";

const RandomQuote=()=>{
    const context=useContext(ApiContext);
    return (
        <QuoteDiv>
            <Quote>
                {`"${context.quoteData.content}"`}
            </Quote>
            <RoterLink to="/author-quotes" onClick={context.getAuthorQuotesFunction}>
                <QuoteAuthor>
                    <div>
                        <h4>{context.quoteData.author}</h4>
                        <p>{context.quoteData.genre}</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined arrow">arrow_forward</span>
                    </div>
                </QuoteAuthor>
            </RoterLink>
        </QuoteDiv>
    )
}

export default RandomQuote;