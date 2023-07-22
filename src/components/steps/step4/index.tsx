import { useContext, useEffect, useState } from "react";
import { StepContext } from "../../../context";
import { Step4Style } from "./style";



export const Step4 = () => {
    const context = useContext(StepContext);
    const [lista, setLista] = useState(context.getStep3)
    // const [count, setCount] = useState(0)
    const [total, setTotal] = useState(context.getStep2.preco)
    // let total = context.getStep2.preco


    useEffect(() => {
        // console.log(context.getStep1)
        // console.log(context.getStep2)
        // context.getStep3.forEach((item)=> console.log(item)) 
        // setLista(context.getStep3.slice(0,1).map((i)=> i))
        console.log(context.step3[0])
        // setLista(context.getStep3.slice(0,1).forEach((item)=> item))
        let count = 0
        context.step3[0].map((item: any) => {
            count += item.preco 
            setTotal(total + count) 
             console.log("count: "+count)
        })
    }, [])
    useEffect(() => {
        console.log('total:' + total)
    }, [])
    return (
        <Step4Style>
            <div id="title">
                <h1>Finishing up</h1>
                <p>double-check everything looks OK before confirm.</p>
            </div>
            <div id="infos">
                <div id="plan">
                    <p>{context.getStep2.plano} ({context.getStep2.pagamento != 'yr' ? 'Monthly' : 'Yearly'})</p>
                    <p>{context.getStep2.valor}</p>
                </div>
                <div id="values">
                    {context.step3[0].map((item: any) => (
                        <p>{item.service} <span>{item.value}</span></p>
                    ))}

                </div>
            </div>
            <div id="total">
                <p>
                    Total {context.getStep2.pagamento != 'yr' ? '(per month)' : '(per year)'}
                    <span>${total}/{context.getStep2.pagamento != 'yr' ? 'mo' : 'yr'}</span>
                </p>
            </div>
        </Step4Style>
    )
}