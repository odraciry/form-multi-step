import { useState, useEffect, useContext } from "react"
import { Step3Style } from "./style"
import { StepContext } from "../../../context";

export interface IComplemento {
    id: number,
    service: string,
    value: string
}

export const Step3 = () => {
    const context = useContext(StepContext);
    const [check1, setCheck1] = useState<boolean>(false)
    const [check2, setCheck2] = useState<boolean>(false)
    const [check3, setCheck3] = useState<boolean>(false)
    const [checks, setChecks] = useState([{} as IComplemento]) 
    const [monthOrYear, setMonthOrYear] = useState(true)
    useEffect(() => {
        // console.log(check1)
    }, [check1, check2, check3])

    useEffect(() => {
        setMonthOrYear(context.getStep2.pagamento != 'mo' ? false : true)
        context.setterStep3(checks.slice(1, checks.length))  
    }, [checks])

    return (
        <Step3Style>
            <div id="title">
                <h1>Pick add ons</h1>
                <p>Add-ons help enhace yous game experience.</p>
            </div>
            <div id="complementos">
                <button className="complemento" onClick={() =>{
                    setCheck1(!check1);
                    if(!check1){
                        setChecks([...checks, { service: 'Online service', value: monthOrYear ? '+1/mo' : '+10/yr', id: 1 }])
                    } else {
                        setChecks(checks.filter((item) => item.id != 1))
                    }
                }}>
                    <input type="checkbox" checked={check1} onChange={() => !check1 ? setCheck1(true) : setCheck1(false)} />
                    <div id="infos">
                        <h2>Online service</h2>
                        <p>Acess to multiplayer games</p>
                    </div>
                    <span>{monthOrYear ? '+1/mo' : '+10/yr'}</span>
                </button>
                <button className="complemento" onClick={() =>{
                    setCheck2(!check2);
                    if(!check2){
                        setChecks([...checks, { service: 'Larger storage', value: monthOrYear ? '+2/mo' : '+20/yr', id: 2 }])
                    } else { 
                        setChecks(checks.filter((item) => item.id != 2))
                    }
                }}>
                    <input type="checkbox" checked={check2} onChange={() => !check2 ? setCheck2(true) : setCheck2(false)} />
                    <div id="infos">
                        <h2>Larger storage</h2>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <span>{monthOrYear ? '+2/mo' : '+20/yr'}</span>
                </button>
                <button className="complemento" onClick={() =>{
                    setCheck3(!check3); 
                    if(!check3){
                        setChecks([...checks, { service: 'Customizable profile', value: monthOrYear ? '+2/mo' : '+20/yr', id: 3 }])
                    } else {
                        setChecks(checks.filter((item) => item.id != 3))
                    }
                }}>
                    <input type="checkbox" checked={check3} onChange={() => !check3 ? setCheck3(true) : setCheck3(false)} />
                    <div id="infos">
                        <h2>Customizable profile</h2>
                        <p>Custom theme on your profile</p>
                    </div>
                    <span>{monthOrYear ? '+2/mo' : '+20/yr'}</span>
                </button>
            </div>
        </Step3Style>
    )
}