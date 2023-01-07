import { BrowserRouter ,Route,Navigate ,Routes} from "react-router-dom";
import { RoterLink } from "./common.styled";
import RandomAuthorQuote from "./RandomAuthorQuote";
import RandomQuote from "./RandomQuote";
import {QuoteGeneratorDiv,Rerun,Footer} from "./QuoteGenerator.styled";
import ApiContext from "./api-context";
import { useContext } from "react";

const QuoteGenerator=()=>{
    const context=useContext(ApiContext);
    return (
        <BrowserRouter>
        <>
            <QuoteGeneratorDiv>
                <Rerun>
                    <RoterLink to="/quote" onClick={context.runRandomFuntion}><span>random</span> <span className="material-symbols-outlined rerun">autorenew</span></RoterLink>
                </Rerun>
                <Routes>
                    <Route path="/" exact element={<Navigate to="/quote"/>}/>
                    <Route path="/quote" element={
                       context.loading?<span className="material-symbols-outlined hourglass">
                       hourglass_top
                       </span> : <RandomQuote/>
                    }
                    />
                    <Route  path="/author-quotes" element={
                        context.loading?<span className="material-symbols-outlined hourglass">
                        hourglass_top
                        </span> :<RandomAuthorQuote/>
                    }
                    />
                </Routes>
            <Footer>created by <span>Sangeetha Jula</span> - devChallenges.io </Footer>
            </QuoteGeneratorDiv>
        </>
        </BrowserRouter>
    )
}

export default QuoteGenerator;