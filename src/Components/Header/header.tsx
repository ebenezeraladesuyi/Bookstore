import react from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../assets/Logo.png"


const Header = () => {

    return(
        <Container>
            <Text>
            <Logo src={logo} /> <span>BookStore</span>
            </Text>

            <Hold>
                <Search> <AiOutlineSearch /> </Search>
                <Button>Upload Book</Button>
                
            </Hold>
        </Container>
    )

}

export default Header

// const Container = styled.div``;

const Text = styled.div`
display: flex;
align-items: center;
margin-left: 50px;

@media screen and (max-width: 500px) {
    margin-left: 20px;
}

span{
    margin-left: 10px;
    font-weight: 600;
    font-size: 22px;
    
@media screen and (max-width: 500px) {
    font-size: 15px;
}
}
`;

const Button = styled.div`
height: 40px;
width: 150px;
background-color: #bb3d5e;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
transition: all 350ms;
cursor: pointer;
outline: none;

:hover{
    transform: scale(0.95);
}


@media screen and (max-width: 500px) {
    width: 120px;
}
`;

const Search = styled.div`
margin-right: 10px;
font-size: 20px;
color: silver;   

@media screen and (max-width: 500px) {
    display: none-;
}
`;

const Hold = styled.div`
display: flex;
align-items: center;
margin-right: 40px;
`;

const Logo = styled.img`
width: 40px;

@media screen and (max-width: 500px) {
    height: 25px;
}
`;

const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 2px gray;
`;