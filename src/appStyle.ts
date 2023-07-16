import { styled } from "styled-components";
export const StyleApp = styled.div`
    background-color: hsl(217, 100%, 97%);
    width: 100%;
    height: 100vh;
    position: relative;
    #background{
        z-index: 1;
        position: absolute;
        width: 100%;
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
`;