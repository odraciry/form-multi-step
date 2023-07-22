import { styled } from "styled-components";
import imgFundoMobile from "./img/bg-sidebar-mobile.svg"
import imgFundoDesktop from "./img/bg-sidebar-desktop.svg"
export const StyleApp = styled.div`
    background-color: hsl(217, 100%, 97%);
    width: 100%;
    height: 100vh;
    position: relative;
    #box{
        position: relative;
        height: 100vh;
        width: 100%;
    }
    #background{
        z-index: 1;
        position: absolute;
        width: 100%;
        background-image: url("./img/bg-sidebar-mobile.svg");
        background-position: center;
        background-size: contain;
        img{
            width: 100%;
            height: 100%;
        }
        #position{
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 3;
            .btPosition{
                margin: 1.5rem 1rem;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                background: none;
                color: hsl(0, 0%, 100%);
                border: 1px solid hsl(0, 0%, 100%);
                text-align: center;
                transition: 1s all;
                font-weight: 700;
                &:hover{
                    border: none;
                    color: hsl(0, 0%, 100%);
                    background-color: hsl(213, 96%, 18%);
                }
            }
        }
    }
    #divButtons{
        position: absolute;
        bottom: 0;
        background-color: hsl(0, 0%, 100%);
        height: 10%;
        width: 100%; 
        display: flex;
        justify-content: space-between;
        box-shadow: 1px 1px 10px hsl(231, 11%, 63%);
    }

    @media screen and (min-width: 1000px ){
        width: 100%;
        height: 100vh;
        margin: auto;
        box-sizing: border-box;
        /* padding: 6%; */
        #box{
            width: 70%;
            height: 90vh;
            border-radius: 12px;
            box-shadow: 1px 1px 10px hsl(231, 11%, 63%);
            background-color: hsl(0, 0%, 100%);
            display: flex;
            box-sizing: border-box;
            padding: 1.5%;
            margin: auto;
            transform: translateY(3rem);
        }
        #background{
        /* border: 1rem solid black; */
        z-index: 2;
        position: relative;
        width: 40%;
        height: 100%;
        box-sizing: border-box;
        padding: 1rem;
        border-radius: 10px;
        background-image: url(${imgFundoDesktop});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        align-items: center;
        img{
            width: 100%;
            display: none;
            z-index: 1;
            position: absolute;
            margin-top: 1rem;
        }
        #position{
            position: absolute;
            width: 100%;
            display: flex;
            flex-direction: column;
            z-index: 2;
            div{
                display: flex;
                color: hsl(0, 0%, 100%);
                p{
                    display: flex;
                    flex-direction: column;
                    font-weight: 700;
                    margin-top: 1rem;
                    letter-spacing: 1.5px;
                    span{
                        font-size: .8rem;
                        font-weight: 500;
                        color: hsl(231, 11%, 63%);
                        margin-bottom: 5px;
                        text-transform: uppercase;
                    }
                }
            }
            .btPosition{
                margin: 1.5rem 1rem;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                background: none;
                color: hsl(0, 0%, 100%);
                border: 1px solid hsl(0, 0%, 100%);
                text-align: center;
                transition: 1s all;
                font-weight: 700;
                &:hover{
                    border: none;
                    color: hsl(0, 0%, 100%);
                    background-color: hsl(213, 96%, 18%);
                }
            }
        }
    }
    #divButtons{
        z-index: 4;
        width: 60%;
        box-shadow: none;
        position: absolute;
        right: 4%;
        bottom: 2%;
    }
    }
    
`;

export const ButtonNext = styled.button`
    width: 8rem;
    height: 3rem;
    background-color: hsl(213, 96%, 18%);
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 3%;
    cursor: pointer;
    transition: 1s all;
    
    &:hover{
        background-color: hsl(243, 100%, 62%);
    }
    @media screen and (min-width: 1000px ){
        margin: 1%;
    }
`;
export const ButtonBack = styled.button`

    width: 8rem;
    height: 5%;
    background:none;
    border: none;
    border-radius: 6px;
    visibility: hidden;
    color: hsl(213, 96%, 18%);
    /* color: transparent; */
    font-size: 1.3rem;
    font-weight: 700;
    margin: 6% 3%;
    cursor: pointer;
    transition: 1s all;
    
    &:hover{
        color: hsl(231, 11%, 63%);
    }
    @media screen and (min-width: 1000px ){
        margin: 2% 2%;
    }

`;