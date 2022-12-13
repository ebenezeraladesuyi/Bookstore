import react from "react";
import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import SingleBook from "../Books/singleBook";
import HomeScreen from "../homeScreen";
import UploadPage from "../upload";


const AllRoutes = () => {
    let Elements = useRoutes([
        {
            path: "/",
            element: <HomeScreen />,
        },
        {
            path : "/books/:id/details",
            element: <SingleBook />
        },
        {
            path : "/uploads",
            element: <UploadPage />
        }
    ])

    return Elements
}

export default AllRoutes