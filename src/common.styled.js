import  styled  from "styled-components";
import {Link} from "react-router-dom";

const colors={
    'verticle-line':'#F7DF94',
    'black':'#000000',
    'white':'#ffffff'
}

const RoterLink=styled(Link)`
    width:100%;
    margin:auto;
    text-decoration:none;
    display:inline-flex;
    justify-content:flex-end;
    padding:10px;
    color:${colors.black};
    .rerun{
        transform:rotate(180deg);
        transition:transform 1s ease;
    }
    &:not(:active) .rerun{
        display:block;
        opacity:1;
        transform:rotate(360deg);
        transition:transform 2s ease;
    }
`
const Quote=styled.div`
    font-family: 'Poppins', sans-serif;
    padding:40px;
    border-left:5px solid ${colors["verticle-line"]};
    box-sizing:border-box;
    margin:40px auto;
    min-height:25%;
    width:100%;
    @media only screen and (max-width:599px){
        padding-left:40px;
    }
`;

export {RoterLink ,Quote}