import { useContext, useEffect, useState } from 'react';
import { StepContext, StepProvider } from './context';
import { Step1 } from './components/steps/step1';
import { ButtonBack, ButtonNext, StyleApp } from './appStyle';
import imgFundo from "./img/bg-sidebar-mobile.svg"
import { Step2 } from './components/steps/step2';
import { Step3 } from './components/steps/step3';
import { Step4 } from './components/steps/step4';
import { Step5 } from './components/step5';
function App() {
  const context = useContext(StepContext);
  const [stepValue, setStepValue] = useState(1);
  const [checked, setChecked] = useState(Boolean);
  const checkedSet = (value: boolean) => {
    setChecked(value)
  }
  const visible = {
    visibility: 'visible'
  };
  const hidden = {
    visibility: 'hidden'
  };
  const btBackStyle = stepValue > 1 ? visible : hidden

  const nextStep = () => {
    checked != true ? setChecked(false) : setStepValue(stepValue + 1)
    console.log(context.getStep1?.name)
  }
  const backStep = () => {
    setStepValue(stepValue - 1)
    console.log("step+1: " + stepValue)
  }
  const Position = () => {
    if (stepValue === 1) {
      return <Step1 checkedSet={checkedSet}/>
    } else if (stepValue === 2) {
      return <Step2 />
    } else if (stepValue === 3) {
      return <Step3 />
    } else if (stepValue === 4) {
      return <Step4 />
    } else return <Step5 />
  }
  useEffect(() => {
    console.log("dados: "+context.getStep1)
  }, [context.step1])
  return (
    <StepProvider>
      <StyleApp id='app'>
        <div id='background'>
          <div id='position'>
            <button className='btPosition' id='bt1'
              style={{
                backgroundColor: stepValue === 1 ? 'hsl(228, 100%, 84%)' : 'transparent',
                color: stepValue === 1 ? 'hsl(213, 96%, 18%)' : 'hsl(0, 0%, 100%)'
              }}
            >1</button>
            <button className='btPosition' id='bt2'
              style={{
                backgroundColor: stepValue === 2 ? 'hsl(228, 100%, 84%)' : 'transparent',
                color: stepValue === 2 ? 'hsl(213, 96%, 18%)' : 'hsl(0, 0%, 100%)'
              }}
            >2</button>
            <button className='btPosition' id='bt3'
              style={{
                backgroundColor: stepValue === 3 ? 'hsl(228, 100%, 84%)' : 'transparent',
                color: stepValue === 3 ? 'hsl(213, 96%, 18%)' : 'hsl(0, 0%, 100%)'
              }}
            >3</button>
            <button className='btPosition' id='bt4'
              style={{
                backgroundColor: stepValue === 4 ? 'hsl(228, 100%, 84%)' : 'transparent',
                color: stepValue === 4 ? 'hsl(213, 96%, 18%)' : 'hsl(0, 0%, 100%)'
              }}
            >4</button>
          </div>
          <img src={imgFundo} alt="" />
        </div>
        <Position />
        {/* <Step1 /> */}
        <div id='divButtons' style={{display: stepValue > 4 ? 'none' : 'flex'}}>
          <ButtonBack onClick={() => backStep()}
            style={{ visibility: stepValue > 1 ? 'visible' : 'hidden' }}
          >
            Go Back
          </ButtonBack>
          <ButtonNext onClick={() => nextStep()}>{stepValue === 4 ? 'Confirm' : 'Next Step'}</ButtonNext>
        </div>
      </StyleApp>
    </StepProvider>
  );
}

export default App;
