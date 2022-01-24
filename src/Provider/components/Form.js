import {AppContext} from '../../Provider';
import {useContext} from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import FinalStep from "./FinalStep";

function Form() {

    const [state, setState] = useContext(AppContext);

    if (state.step === 1) {
        return (
            <Step1 />
        )
    }

    if (state.step === 2) {
        return (
          <Step2 />
        );
    }

    if (state.step === 3) {
        return (
          <Step3 />
        );
    }

    if (state.step === 4) {
        return (
          <FinalStep />
        );
    }
  }
  
  export default Form;
  