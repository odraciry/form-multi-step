import { StepContext } from "../../../context";
import { useContext } from 'react'
import { Step2Style } from "./style";
import LogoArcade from "../../../img/icon-arcade.svg"
import LogoAdvanced from "../../../img/icon-advanced.svg"
import LogoPro from "../../../img/icon-pro.svg"

export const Step2 = () => {
    const context = useContext(StepContext);
    return (
        <Step2Style>
            <div id="title">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div id="plans">
                <div className="plan">
                    <img src={LogoArcade} />
                    <div>
                        <h2>Arcade</h2>
                        <p>$9/mo</p>
                    </div>
                </div>
                <div className="plan">
                    <img src={LogoAdvanced} />
                    <div>
                        <h2>Advanced</h2>
                        <p>$12/mo</p>
                    </div>
                </div>
                <div className="plan">
                    <img src={LogoPro} />
                    <div>
                        <h2>Pro</h2>
                        <p>$15/mo</p>
                    </div>
                </div>
            </div>
        </Step2Style>
    )
}