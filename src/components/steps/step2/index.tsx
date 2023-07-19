import { StepContext } from "../../../context";
import { useContext, useState, useEffect } from 'react'
import { Step2Style } from "./style";
import LogoArcade from "../../../img/icon-arcade.svg"
import LogoAdvanced from "../../../img/icon-advanced.svg"
import LogoPro from "../../../img/icon-pro.svg"

interface IPagamento {
    arcade: string,
    advanced: string,
    pro: string
}
export interface IPlan {
    plano: string,
    valor: string,
    pagamento: string
}

export const Step2 = () => {
    const context = useContext(StepContext); 
    const [yearly, setYearly] = useState<boolean>(false);
    const [monthly, setMonthly] = useState<boolean>(true);
    const [pagMonth, setPagMonth] = useState({} as IPagamento)
    const [pagYear, setPagYear] = useState({} as IPagamento)
    const [plan, setPlan] = useState({} as IPlan);

    const styleEscolha = () => {
        if (monthly) {
            setMonthly(false);
            setYearly(true);
        } else {
            setMonthly(true);
            setYearly(false);
        }
    }
    useEffect(() => {
        monthly ?
            setPagMonth({
                arcade: '$9/mo',
                advanced: '$12/mo',
                pro: '$15/mo'
            }) :
            setPagYear({
                arcade: '$90/yr',
                advanced: '$120/yr',
                pro: '$150/yr'
            })
            context.setterStep2(plan)
    }, [monthly, yearly, plan])
    return (
        <Step2Style>

            <div id="title">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div> 
            <div id="plans">
                <button className="plan" onClick={() => {
                    monthly ? setPlan({ plano: 'Arcade', valor: pagMonth.arcade, pagamento: 'mo' }) : setPlan({ plano: 'Arcade', valor: pagYear.arcade, pagamento: 'yr' })
                    context.setterStep2(plan)
                }}
                
                >
                    <img src={LogoArcade} />
                    <div>
                        <h2>Arcade</h2>
                        <p>{monthly ? pagMonth.arcade : pagYear.arcade}</p>
                        <span style={{ display: monthly ? 'none' : 'block' }}>2 months free</span>
                    </div>
                </button>
                <button className="plan" onClick={() => {
                    monthly ? setPlan({ plano: 'Advanced', valor: pagMonth.advanced, pagamento: 'mo' }) : setPlan({ plano: 'Advanced', valor: pagYear.advanced, pagamento: 'yr' })
                    context.setterStep2(plan)
                }}>
                    <img src={LogoAdvanced} />
                    <div>
                        <h2>Advanced</h2>
                        <p>{monthly ? pagMonth.advanced : pagYear.advanced}</p>
                        <span style={{ display: monthly ? 'none' : 'block' }}>2 months free</span>
                    </div>
                </button>
                <button className="plan" onClick={() => { 
                    monthly ? setPlan({ plano: 'Pro', valor: pagMonth.pro, pagamento: 'mo' }) : setPlan({ plano: 'Pro', valor: pagYear.pro, pagamento: 'yr' })
                    context.setterStep2(plan)
                }}>
                    <img src={LogoPro} />
                    <div>
                        <h2>Pro</h2>
                        <p>{monthly ? pagMonth.pro : pagYear.pro}</p>
                        <span style={{ display: monthly ? 'none' : 'block' }}>2 months free</span>
                    </div>
                </button>
            </div>
            <div id="escolha">
                <p style={{ color: !monthly ? 'hsl(231, 11%, 63%)' : 'hsl(213, 96%, 18%)' }}>Monthly</p>
                <button id="slide" onClick={() => { styleEscolha(); }}>
                    <span style={{ transform: !yearly ? 'translateX(0)' : 'translateX(1.4rem)' }}></span>
                </button>
                <p style={{ color: !yearly ? 'hsl(231, 11%, 63%)' : 'hsl(213, 96%, 18%)' }}>Yearly</p>
            </div>
        </Step2Style>
    )
}

