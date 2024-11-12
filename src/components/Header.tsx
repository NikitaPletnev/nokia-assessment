import {Box, styled} from "@mui/material";
import React from "react";
import header from "../assets/header.png";

const HeaderContainer = styled("header")({
    height: "80px",
    transition: "all .3s ease",
});

const ImageBox = styled(Box)({
    position: "relative",
    margin: "auto",
    width: "fit-content",
    height: "80px",
    overflow: "hidden",
    "& img":{
        position: "relative",
        zIndex: 1,
        border: "3px solid white",
    }
});

const BackCircle = styled(Box)({
    position: "absolute",
    zIndex: 0,
    height: "600px",
    aspectRatio: "1/1",
    borderRadius: "100%",
});

const BackContainer = styled(Box)({
    top: 0,
    position: "absolute",
    height: "80px",
    width: "100%",
    animation: "rotation 10s linear infinite",
    "@keyframes rotation":{
        "from":{
            transform:"rotate(0deg)",
        },
        "to":{
            transform:"rotate(360deg)",
        }
    }
});

const BackCircle1 = styled(BackCircle)({
    top: "-140%",
    left: "-50%",
    background: "radial-gradient(circle, #1c2dec 0%, transparent 70%)",
});

const BackCircle2 = styled(BackCircle)({
    top: "-360%",
    left: "-10%",
    background: "radial-gradient(circle, #8ef9ee 0%, transparent 70%)",
});

const BackCircle3 = styled(BackCircle)({
    top: "-110%",
    left: "35%",
    background: "radial-gradient(circle, #8cf639 0%, transparent 70%)",
});

const Header = ():JSX.Element => {
    return (
        <HeaderContainer>
            <ImageBox>
                <BackContainer>
                    <BackCircle1/>
                    <BackCircle2/>
                    <BackCircle3/>
                </BackContainer>
                <img src={header} alt={"headerImage"}/>
            </ImageBox>
        </HeaderContainer>
        
    );
};

export default Header;
