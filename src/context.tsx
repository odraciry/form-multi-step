import { json } from "node:stream/consumers";
import { createContext, useState } from "react";
import { IUser } from "./components/steps/step1";

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

}

export const StepContext = createContext<StepProvider>({} as StepProvider);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
    const [step, setStep] = useState<number>(1);
    const [step1, setStep1] = useState({} as IUser);
    const [step2, setStep2] = useState();
    const [step3, setStep3] = useState();
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
   
    const addDados = (dados: IUser) => {
        console.log(dados)
        setStep1(dados)

        // if(step === 1) setStep1(dados)
        // else if(step === 2) setStep2(dados)
        // else if(step === 3) setStep3(dados)
        // else setStep4(dados)
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
            getStep1
        }}>
            {children}
        </StepContext.Provider>
    )
}