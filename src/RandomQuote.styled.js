import  styled  from "styled-components";
const colors={
    'verticle-line':'#F7DF94',
    'black':'#000000',
    'white':'#ffffff'
}

const QuoteDiv=styled.div`
    height:75%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    width:50%;
    margin:auto;
    @media only screen and (max-width:599px){
        width:80%;
    }
`;


const QuoteAuthor=styled.div`
    width:100%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    font-family: 'Poppins', sans-serif;
    background:${colors.white};
    color:${colors.black};
    align-items:center;
    height:80px;
    transition: all  1s ease;
    & h4{
        font-size:1rem;
        margin:0;
    }
    & p{
        text-align:left;
        margin:0;
        font-size:0.5rem;
    }
    & .arrow{
        transform: translateX(-60px);
        color:white;
        opacity:0;
        
    }    
    &:hover{
        background:${colors.black};
        color:${colors.white};
        transition: all  1.5s ease;
        & .arrow{
            transform: translateX(0px);
            transition: transform  1.5s ease;  
            opacity:1;
        }
    }
`;

export {QuoteDiv,QuoteAuthor} ;