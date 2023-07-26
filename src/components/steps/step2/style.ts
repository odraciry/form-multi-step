import {  styled } from "styled-components";

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
            background: none;
            cursor: pointer;
            transition: 1s all;
            img{
                margin: 1rem;
            }
            div{
                h2{
                    color: hsl(213, 96%, 18%);
                    text-align: left;
                }
                p{
                    color: hsl(231, 11%, 63%);
                    font-size: 1rem;
                    text-align: left;
                }
                span{
                    color: hsl(213, 96%, 18%);
                    font-size: .8rem;
                    font-weight: 500;
                    transition: 1s all;
                }
            }
        }
        .plan:focus{
            transition: 1s;
            background-color: hsl(206, 94%, 97%);
            border: 2px solid hsl(213, 96%, 18%);
        }
        .plan:hover{
            background-color: hsl(206, 94%, 97%);
        }
    }
    #escolha{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 5rem;
        align-items: center;
        background-color: hsl(217, 100%, 99%);
        border-radius: 12px;
        p{
            font-weight: 700;
            color: hsl(213, 96%, 18%);
            margin: 0 1.5rem;
            transition: 1s all;
        }
        button{
            width: 3rem;
            height: 1.6rem;
            border: none;
            border-radius: 15px;
            background-color: hsl(213, 96%, 18%);
            position: relative;
            cursor: pointer;
        }
        span{
            position: absolute;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: white;
            left: 0;
            top: 0;
            margin: .3rem;
            transition: 1s all;
        }
    }
    @media screen and (min-width: 1000px ){
        position: initial;
        box-shadow: none;
        #title{
            width: 70%;
        }
        #plans{
            transform: translateY(2rem);
            display: flex;
            flex-direction: row;
            width: 80%;
            .plan{
                flex-direction: column;
                height: 12rem;
                width: 9rem;
                align-items: flex-start;
                img{
                    margin-bottom: 3rem;
                }
                div{
                    margin-left: 1rem;
                    span{
                        margin-top: .5rem;
                    }
                }
            }
        }
        #escolha{
        transform: translateY(-2rem);
    }
    }
    
`;