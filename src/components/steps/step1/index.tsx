import { StepContext } from "../../../context";
import { useContext, useEffect, useState } from "react";
import { Step1Style } from "./style";

export interface IUser {
    name: string,
    email: string,
    number: string
}

export const Step1 = (props: any) => {
    const context = useContext(StepContext);

    const [check, setCheck] = useState(Boolean);
    const [name, setName] = useState<boolean>();
    const [email, setEmail] = useState<boolean>();
    const [number, setNumber] = useState<boolean>();
    const [user, setUser] = useState({} as IUser)

    const [displayName, setDisplayName] = useState('none')
    const [displayEmail, setDisplayEmail] = useState('none')
    const [displayNumber, setDisplayNumber] = useState('none')
    const [styleName, setStyleName] = useState<String>('hsl(231, 11%, 63%)')
    const [styleEmail, setStyleEmail] = useState<String>('hsl(231, 11%, 63%)')
    const [styleNumber, setStyleNumber] = useState<String>('hsl(231, 11%, 63%)')
    const styleInput = 'hsl(354, 84%, 57%)'
    const styleInputCheck = 'hsl(213, 96%, 18%)'
    useEffect(() => {
        console.log(check)
        name && email && number ? setCheck(true) : setCheck(false)
        if (check) {
            props.checkedSet(check)
            context.setterStep1(user)
        }
        console.log(context.getStep2)
    }, [user])
    useEffect(() => {
       
    }, [check])
    return (
        <Step1Style>
            <div id="title">
                <h1>Personal info</h1>
                <p>please provide your name, email address, and phone number</p>
            </div>
            <div id="infos">
                <div className="inputs">
                    <label htmlFor="name">Name<span style={{ display: `${displayName}` }}>This field is required</span></label>
                    <input type="text" name="name" id="name" value={context.getStep1?.name}
                        onChange={(e) => {
                            setUser({ ...user, name: e.target.value });
                            if (user.name?.length >= 3) {
                                setName(true)
                                setDisplayName('none')
                                setStyleName(styleInputCheck)
                            } else {
                                setName(false)
                                setStyleName(styleInput)
                                setDisplayName('block')
                            }
                        }}
                        required style={{ borderColor: `${styleName}` }} />
                </div>
                <div className="inputs">
                    <label htmlFor="email">Email Address<span style={{ display: `${displayEmail}` }}>This field is required</span></label>
                    <input type="email" name="email" id="email" value={context.getStep1?.email}
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                            if (user.email?.includes('@')) {
                                setEmail(true)
                                setDisplayEmail('none')
                                setStyleEmail(styleInputCheck)
                            } else {
                                setEmail(false)
                                setStyleEmail(styleInput)
                                setDisplayEmail('block')
                            }
                        }}

                        required style={{ borderColor: `${styleEmail}` }} />
                </div>
                <div className="inputs">
                    <label htmlFor="number">Phone Number<span style={{ display: `${displayNumber}` }}>This field is required</span></label>
                    <input type="tel" name="number" id="number" value={context.getStep1?.number}
                        onChange={(e) => {
                            setUser({ ...user, number: e.target.value });
                            if (user.number?.length >= 9) {
                                setNumber(true)
                                setDisplayNumber('none')
                                setStyleNumber(styleInputCheck)
                            } else {
                                setNumber(false)
                                setStyleNumber(styleInput)
                                setDisplayNumber('block')

                            }
                        }}
                        required style={{ borderColor: `${styleNumber}` }} />
                </div>
            </div>
        </Step1Style>
    )
}