import { styled } from "styled-components";

export const Step4Style = styled.div`
    z-index: 2;
    position: absolute;
    background-color: hsl(0, 0%, 100%);
    width: 90%;
    left: 5%;
    top: 12%;
    height: 60vh;
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
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 40%;
        background-color: hsl(217, 100%, 95%);
        padding: 5%;
        border-radius: 12px;
        #plan{
            display: flex;
            justify-content: space-between;
            border-bottom:.2px solid hsl(231, 11%, 83%);
            color: hsl(213, 96%, 18%);
            font-weight: 600;
            height: 2.5rem;
        }
        #values{
            padding-top: 1rem;
            color: hsl(231, 11%, 63%);
            p{
                margin-top: .5rem;
                position: relative;
                font-weight: 500;

                span{
                    position: absolute;
                    right: 2px;
                    color: hsl(213, 96%, 18%);
                }
            }
        }
    }
    #total{
        width: 80%;
        height: 20%;
        p{
                padding-top: 1rem;
                color: hsl(231, 11%, 63%);
                margin-top: .5rem;
                position: relative;
                font-size: 1.1rem;

                span{
                    position: absolute;
                    right: 2px;
                    color: hsl(243, 100%, 62%);
                    font-weight: 700;
                }
            }
    }
`;