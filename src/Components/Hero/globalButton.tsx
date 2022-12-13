import react from "react"
import styled from "styled-components"



interface iProps {
    text: string;
}

const GlobalButton: React.FC<iProps> = ({text}) => {


    return(

        <Button> {text} </Button>
    )
}

export default GlobalButton

const Button = styled.button`
height: 37px;
/* width: 150px; */
padding-left: 15px;
padding-right: 15px;
background-color: #bb3d5e;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
transition: all 350ms;
cursor: pointer;
outline: none;
border: none;
margin-left: 13px;

:hover{
    transform: scale(0.95);
}


@media screen and (max-width: 500px) {
    /* width: 120px; */
}
`;