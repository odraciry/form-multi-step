import { styled } from "styled-components";

export const Step2Style = styled.div`
    z-index: 2;
    position: absolute;
    background-color: hsl(0, 0%, 100%);
    width: 90%;
    left: 5%;
    top: 12%;
    height: 75vh;
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
    #plans{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: auto;
        margin-top: -1rem;
        .plan{
            display: flex;
            width: 90%;
            height: 5rem;
            align-items: center;
            margin: auto;
            margin-bottom: 1rem;
            justify-content: left;
            border: 1px solid hsl(231, 11%, 63%);
            border-radius: 6px;
            img{
                margin: 1rem;
            }
            div{
                h2{
                    color: hsl(213, 96%, 18%);
                }
                p{
                    color: hsl(231, 11%, 63%);
                }
            }

        }
    }
`;