import { useContext, useEffect, useState } from "react";
import { StepContext } from "../../../context";
import { Step4Style } from "./style";



export const Step4 = () => {
    const context = useContext(StepContext);
    const [lista, setLista] = useState(context.getStep3)
    useEffect(() => {
        // console.log(context.getStep1)
        // console.log(context.getStep2)
        // context.getStep3.forEach((item)=> console.log(item)) 
        // setLista(context.getStep3.slice(0,1).map((i)=> i))
        console.log(context.step3[0])
        // setLista(context.getStep3.slice(0,1).forEach((item)=> item))
    }, []) 
    return (
        <Step4Style>
            <div id="title">
                <h1>Finishing up</h1>
                <p>double-check everything looks OK before confirm.</p>
            </div>
            <div id="infos">
                <div id="plan">
                    <p>{context.getStep2.plano} (Monthly)</p>
                    <p>{context.getStep2.valor}</p>
                </div>
                <div id="values">
                   { context.step3[0].map((item:any)=>(
                    <p>{item.service} <span>{item.value}</span></p>
                   ))}
                </div>
            </div>
        </Step4Style>
    )
}