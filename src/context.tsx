import { json } from "node:stream/consumers";
import { createContext, useState } from "react";
import { IUser } from "./components/steps/step1";
import { IPlan } from "./components/steps/step2";
import { IComplemento } from "./components/steps/step3";

interface StepProvider {
    step: number,
    addDados: Function,
    step1: IUser,
    step2: any,
    step3: any,
    step4: any,
    date: object,
    getStep1: IUser,
    setterStep1: Function
    getStep2: IPlan,
    setterStep2: Function,
    getStep3: IComplemento[],
    setterStep3: Function

}

export const StepContext = createContext<StepProvider>({} as StepProvider);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
    const [step, setStep] = useState<number>(1);
    const [step1, setStep1] = useState({} as IUser);
    const [step2, setStep2] = useState({} as IPlan);
    const [step3, setStep3] = useState([{} as IComplemento] );
    const [step4, setStep4] = useState();
    const [date, setDate] = useState<Object>({});

    const getStep1 = {
        name: step1.name,
        email: step1.email,
        number: step1.number
    }
    const setterStep1 = (user: IUser) => {
        console.log('step1 ok!')
        console.log(user)
        setStep1(user)
    }

    const getStep2 = {
        plano : step2.plano,
        valor: step2.valor,
        pagamento: step2.pagamento
    }
    const setterStep2 = (plan: IPlan) => {
        console.log('step2 ok!')
        console.log(plan)
        setStep2(plan)
    }

    const getStep3 = step3
    const setterStep3 = (items: IComplemento) => {
        console.log('step3 ok!');
        console.log(items)
        setStep3([items].slice())
    }
   
    const addDados = (dados: IUser) => {
        console.log(dados)
        setStep1(dados)
    }

    return(
        <StepContext.Provider value={{
            addDados,
            step1,
            step2,
            step3,
            step4, 
            step,
            date,
            setterStep1,
            getStep1,
            setterStep2,
            getStep2,
            getStep3,
            setterStep3
        }}>
            {children}
        </StepContext.Provider>
    )
}