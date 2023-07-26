import { styled } from "styled-components";

export const Step5Style = styled.div`
    z-index: 2;
    position: absolute;
    background-color: hsl(0, 0%, 100%);
    width: 90%;
    left: 5%;
    top: 12%;
    height: 60%;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 1px 1px 10px hsl(231, 11%, 63%);
    #title{
        margin: 3rem 1rem;
        img{
            width: 5rem;
            margin: 3rem 0;
        }
        h1{
            color: hsl(213, 96%, 18%);
        }
        span{
            
        }
        p{
            line-height: 1.2rem;
            margin-top: 1rem;
            color: hsl(231, 11%, 63%);
        }
    }
    @media screen and (min-width: 1000px ){
        position: initial;
        box-shadow: none;
        #title{
            margin: 4rem 2rem;
        }
    }
`;