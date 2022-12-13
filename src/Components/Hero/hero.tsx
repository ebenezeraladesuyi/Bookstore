import react from "react";
import styled from "styled-components";
import video from "../assets/vid.mp4"
import GlobalButton from "./globalButton";
import { AiOutlineSearch } from "react-icons/ai"


const Hero = () => {
    return (

        <Container>

            <Video
            autoPlay
            loop
            playsInline
            muted
            src={video} />

            <Content>
                <ButtonHold>
                    
                        <GlobalButton text="Discover" />
                        <GlobalButton text="Animation" />
                        <GlobalButton text="Branding" />
                        <GlobalButton text="Inspirational" />
                        <GlobalButton text="Mobile" />
                        <GlobalButton text="Print" />
                        <GlobalButton text="Typography" />
                        <GlobalButton text="Drama" />
                        
                </ButtonHold>

                <h2>
                    {" "}
                    Explore the World's leading<br/>  Books and Authors</h2>

                <p>
                Millions of Authors and Publishers around the world showcase their books on BookStore - the home to the world's best books and creative professionals.
                </p>

                <InputHold>
                    <Icon>
                        <AiOutlineSearch />
                    </Icon>
                    <Input type="text" placeholder="Search Book" />
                </InputHold>
            </Content>

        </Container>
    )
}

export default Hero;

// const Hero = styled.div``;

const Input = styled.input`
background-color: transparent;
border: none;
outline: none;
flex: 1;
`;

const Icon = styled.div`
margin-left: 20px;
margin-right: 10px;
font-size: 20px;
`;

const InputHold = styled.div`
display: flex;
align-items: center;
height: 50px;
width: 500px;
background-color: white;
color: black;
border-radius: 25px;
margin-top: 10px;

@media screen and (max-width: 500px) {
    width: 300px;
}
`;

// const Hero = styled.div``;

// const Button = styled.div`
/* height: 40px;
width: 150px;
background-color: #bb3d5e;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
transition: all 350ms;
cursor: pointer;
outline: none;

:hover{
    transform: scale(0.95);
}


@media screen and (max-width: 500px) {
    width: 120px;
} */
// `;

const ButtonHold = styled.div`
margin-top: 50px;
display: flex;
overflow-x: scroll;
justify-content: center;
align-items: center;
width: 100%;
::-webkit-scrollbar{
    width: 0;
}

/* @media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
} */
`;

const Content = styled.div`
position: absolute;
height: 100%;
width: 100%;
color: white;
display: flex;
justify-content: center;
margin-top: 0px;
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;
text-align: center;

h2{
    font-size: 27px;
    margin: 0;
    margin-top: 25px;

@media screen and (max-wdith: 500px) {
    width: 85%;
}
}

p{
    width: 600px;

@media screen and (max-wdith: 600px) and (max-width: 330px) {
    width: 300px;
}

@media screen and (max-wdith: 320px) {
    width: 250px;
}
}
`;

const Video = styled.video`
height: 100%;
width: 100%;
object-fit: cover;
`;

const Container = styled.div`
width: 100%;
height: 500px;
background-color: black;
position: relative;
display: flex;
justify-content: center;
/* align-items: center; */

::before {
    content: "";
    background-color: black;
    opacity: 0.8;
    position: absolute;
    height: 100%;
    width: 100%;
}
`;
