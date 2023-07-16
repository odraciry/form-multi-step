import { styled } from "styled-components";

export const Step1Style = styled.div`
    z-index: 2;
    position: absolute;
    background-color: hsl(0, 0%, 100%);
    width: 90%;
    left: 5%;
    top: 12%;
    height: 70vh;
    align-items: center;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 1px 1px 10px hsl(231, 11%, 63%);
    #title{
        width: 80%;
        margin: 2rem 0;
        h1{
            color: hsl(213, 96%, 18%);
        }
        p{
            margin-top: 1rem;
            color: hsl(231, 11%, 63%);
            width: 80%;
        }
    }
    #infos{
        width: 80%;
        span{
            display: none;
        }
        .inputs{
            margin: 1rem 0;
            display: flex;
            flex-direction: column;

            label{
                color: hsl(213, 96%, 18%);
                font-weight: 500;
                margin-bottom: 2px;
            }
            input{
                padding: .5rem;
                height: 2rem;
                width: 90%;
                border-radius: 6px;
                border: 1px solid hsl(231, 11%, 63%);
                color: hsl(213, 96%, 18%);
                font-size: 1rem;
                /* :hover{
                    border-color: hsl(213, 96%, 18%);
                } */
            }
        }
    }
`;