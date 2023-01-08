import  styled  from "styled-components";

const QuoteGeneratorDiv=styled.div`
    height:100vh;
    position:relative;
    @keyframes hourGlass{
        from{
            transform:rotate(0deg);
        }
        to{
            transform:rotate(180deg);
        }
    }
    .hourglass{
        animation-duration:0.5s;
        animation-iteration-count:infinite;
        animation-name:hourGlass;
        position:absolute;
        top:50%;
    }
`;

const Rerun=styled.div`
    height:10%;
    text-align:end;
    margin:auto 20px;
`;
const Footer=styled.p`
    position:absolute;
    bottom:0;
    left:50%;
    transform:translate(-50%);
    padding: 2% 0;
    width: 100%;
    color:#828282;
    font-size:1rem;
    margin:0;
    span{
        font-weight:bold;
    }
    @media only screen and (max-width:599px){
        padding: 5% 0;
    }
`
export {QuoteGeneratorDiv,Rerun,Footer};