import { styled } from "styled-components";

export const Step3Style = styled.div`
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
    #complementos{
        width: 100%;
        /* span{
            display: none;
        } */
        .complemento{
            display: flex;
            width: 90%;
            height: 4rem;
            align-items: center;
            margin: auto;
            margin-bottom: 1rem;
            justify-content: left;
            border: 1px solid hsl(231, 11%, 63%);
            border-radius: 6px;
            background: none;
            padding: .5rem;
            position: relative;
            
                input{
                    height: 1rem;
                    width: 1rem;
                }
                h2{
                    font-size: 1.1rem;
                    color: hsl(213, 96%, 18%);
                    text-align: left;
                }
                p{
                    color: hsl(231, 11%, 63%);
                    font-size: 1rem;
                    text-align: left;
                    font-size: .8rem;
                }
                span{
                    color: hsl(213, 96%, 18%);
                    font-size: .8rem;
                    font-weight: 500;
                    transition: 1s all;
                    position: absolute;
                    right: 1rem;
                }
                div{
                   transform: translateX(1rem) ;
                }
        }
        .complemento:focus{
            border: 2px solid hsl(213, 96%, 18%);
        }
    }
`;