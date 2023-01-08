
import styled from "styled-components";
const RandomAuthorQuoteDiv=styled.div`

    & p{
        text-align:left;
        font-size:1.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight:500px;
    }
    height:75%;
    width:50%;
    margin:auto;
    overflow:auto;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #F7DF94;
        border-radius: 9px;
    }
    @media only screen and (max-width:599px){
        width:80%;
    }
`;
export {RandomAuthorQuoteDiv};