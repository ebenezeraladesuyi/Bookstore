import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai"
// import axios from "axios";
import data from "../data.json"
import { Link } from "react-router-dom"

// export type cards = {
//     title: string,
//     image: string,
//     category: string
// }

const BookList = () => {

    // const [card, setCard] = useState<cards[] | null>()

    // const fetchData = async()=>{

	//     await axios.get("https://fakestoreapi.com/products").then((res) => {
            
    //         setCard(res.data)
	//     });
    // }
    

    // React.useEffect(() => {
    //     fetchData()
    // }, [])


    return (
        <div>

            <Container>

               {data.map((props) => (
                    <Card key={props.id}>
                    <Link to={"/books/${props.id}/details"}>
                    <ImageHolder>
                        <Image src="/logo192.png" />

                        <Cont>
                            <Button>{props.title}</Button>

                            <TitleHold>
                                <Title>
                                    {/* {card ? card.map((cards) => {
                                    return <p>{cards.title}</p>
                                }) : null} */}
                                Animal Farm
                                </Title>
                            </TitleHold>

                        </Cont>

                    </ImageHolder>
                    </Link>

                    <DownPart>
                            <AuthorHold>
                                <AuthorImage>
                                    {/* {card ? card.map((cards) => {
                                    return <p>{cards.image}</p>
                                }) : null} */}
                                G
                                </AuthorImage>

                                <AuthorName>
                                    {/* {card ? card.map((cards) => {
                                    return <p>{cards.category}</p>
                                }) : null} */}
                                George Orwell
                                </AuthorName>
                            </AuthorHold>

                            <View>
                                <AiFillEye style={{fontSize:"18px"}}/>
                                <span>34k</span>
                            </View>

                    </DownPart>

                    <HoverCard>
                        <First>
                            <Hold>
                                <AuthorImage>G</AuthorImage>
                                <AuthorName>George Orwell</AuthorName>
                            </Hold>

                            <But>View</But>
                        </First>

                        <Second>
                            <MainImage src="/logo192.png" />
                            <MainImage src="/logo192.png" />
                            <MainImage src="/logo192.png" />
                        </Second>
                    </HoverCard>


                </Card>
               ))}

                

            </Container>

        </div>
    )
};

export default BookList

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

const Second = styled.div`
display: flex;
margin-top: 20px;
`;

const But = styled.div`
height: 30px;
width: 120px;
display: flex;
justify-content: center;
align-items: center;
background-color: silver;
border-radius: 5px;
`;

const Hold = styled.div`
display: flex;
align-items: center;
cursor: pointer;
width: 100%;
`;

const First = styled.div`
display: flex;
`;

const HoverCard = styled.div`
height: 150px;
width: 100%;
position: absolute;
display: flex;
flex-direction: column;
top: 10px;
border-radius: 5px;
background-color: white;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
padding: 20px;
z-index: 1;
display: none;
`;

const MainImage = styled.img`
height:100px;
width: 100px;
border-radius: 5px;
background-color: gray;
margin-right: 5px;
object-fit: cover;
`;

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
border-radius: 5px;
`;

const View = styled.div`
width: 45px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 15px;
font-weight: 600;
cursor: pointer;
`;

const AuthorName = styled.div`
font-weight: 600;
font-size: 15px;
cursor: pointer;
`;

const AuthorImage = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: red;
color: white;
font-weight: 600;
text-align: center;
cursor: pointer;
`;

const AuthorHold = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 135px;
`;

const DownPart = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5px;

&:hover ~ ${HoverCard} {
    display: flex;
}
`;

const Title = styled.div`
/* display: none; */
font-weight: 600;
font-size: 18px;
display: flex;
color: white;
position: absolute;
bottom: 6px;
margin-left: 15px;

/* :hover{
    display: flex;
} */
`;

const TitleHold = styled.div`
opacity: 0;
height: 160px;
color: white;
display: flex;
transition: all 350ms;
border-radius: 10px;
/* background-color: red; */
position: relative;
background-image: linear-gradient(
    0deg,
    rgba(65, 73, 73, 1) 0%,
    rgba (253, 187, 45, 0) 100%,
);

:hover{
    opacity: 1;
}
`;

const Button = styled.div`
margin: 20px;
background-color: #302f3e;
width: 130px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-weight: 600;
border-radius: 20px;
`;

const Cont = styled.div`
position: absolute;
height: 200px;
width: 100%;
/* background-color: red; */
top: 0;
`;

const ImageHolder = styled.div`
height: 250px;
width: 100%;
background-color: silver;
position: relative;
cursor: pointer;
border-radius: 10px;

/* &:hover ~ ${TitleHold} {
    display: block;
} */
`;

const Card = styled.div`
/* height: 200px; */
width: 320px;
position: relative;
margin: 10px;
/* border: 1px solid silver; */
`;

const Container = styled.div`
margin-top: 30px;
padding-bottom: 25px;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;
