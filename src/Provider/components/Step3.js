import {useContext, useState} from 'react';
import {AppContext} from '../../Provider';

function Step3() {
  const [state, setState] = useContext(AppContext);

    function handleChangePhone (event) {
        let value = event.target.value;

        let phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        if (phoneFormat.test(value)) {
            setState({ ...state, statusPhone: "ok", phone: event.target.value })
        } else {
            setState({ ...state, statusPhone: "incorrect", phone: event.target.value })
        }
    }

    function handleChange (event) {
        let value = event.target.value;

        setState({ ...state, [event.target.name] : event.target.value })
    }

    function handleClickBack () {
        setState({...state, step: state.step - 1})
        console.log(state, "state desde step2")
    }

    function handleClickNext () {
        if (state.statusPhone === "ok") {
            setState({...state, step: state.step + 1})
        } else {
            if (state.statusPhone === "incorrect") {
                alert("Telefono invalido.")
            } else {
                alert("Por favor ingrese un telefono")
            }
        }
    }

    return (
      <>
            <div className="form_body">
                <div className="header">
                    <h1>Other Info</h1>
                    <span>{state.step}</span>
                </div>
                <div className="form_data">
                    <div className="input_field">
                        <input type="text" name="phone" onChange={handleChangePhone} value={state.phone} />
                        <span>Phone</span>
                    </div>

                    <div className="input_field">
                        <input type="text" name="country" onChange={handleChange} value={state.country}/>
                        <span>Country</span>
                    </div>
        
                    <div className="input_field">
                        <input type="text" name="state" onChange={handleChange} value={state.state} />
                        <span>State</span>
                    </div>
        
                </div>
            </div>
            <div className="footer">
                <button onClick={handleClickBack}>Back</button>
                <button onClick={handleClickNext}>Finish</button>
            </div>
    </>
    );
}
  
  export default Step3;
  