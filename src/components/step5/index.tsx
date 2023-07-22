import { StepContext } from "../../context"
import { Step5Style } from "./style"
import { useContext } from 'react'
import thanks from '../../img/icon-thank-you.svg'

export const Step5 = () => {
    const context = useContext(StepContext)
    return (
        <Step5Style>
            <div id="title">
                <img src={thanks} />
                <h1>Thank you</h1>
                <span>{context.getStep1.name != null ? context.getStep1.name : "" }</span>
                <p>Thanks for confirming your subscription!
                    <br/> We hope you have fun using our platform. If you never need support, 
                        please feel free to email us at support@ricardogamer.com.
                </p>
            </div>
        </Step5Style>
    )
}