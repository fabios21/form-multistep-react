import {useContext, useState} from 'react';
import {AppContext} from '../../Provider';

function Step2() {
    const [state, setState] = useContext(AppContext);
    const [status, setStatus] = useState("");


    function handleChangePassword (event) {
        let value = event.target.value;

        let passwordFormat = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i;

        if (passwordFormat.test(value)) {
            setState({ ...state, statusPassword: "ok", password: event.target.value })
        } else {
            setState({ ...state, statusPassword: "incorrect", password: event.target.value })
        }
    }

    function handleChangePasswordConfirmation (event) {
        let value = event.target.value;

        if (state.password === value) {
            setState({ ...state, statusPasswordConfirmation: "ok", repeatPassword: event.target.value })
        } else {
            setState({ ...state, statusPasswordConfirmation: "incorrect", repeatPassword: event.target.value })
        }
    }

    function handleChangePin (event) {
        let value = event.target.value;

        let pinFormat = /^(\d{4}|\d{6})$/g;

        if (pinFormat.test(value)) {
            setState({ ...state, statusPin: "ok", pin: event.target.value })
        } else {
            setState({ ...state, statusPin: "incorrect", pin: event.target.value })
        }
        console.log(state.statusPin)
    }


    function handleClickBack () {
        setState({...state, step: state.step - 1})
    }

    function handleClickNext () {
        if (state.statusPassword === "ok") {
            if (state.statusPasswordConfirmation === "ok") {
                if (state.statusPin === "ok") {
                    setState({...state, step: state.step + 1})
                } else {
                    if (state.statusPin === "incorrect") {
                        alert("Por favor ingrese un Pin valido")
                    } else {
                        alert("Por favor ingrese un Pin")
                    }
                }
            } else {
                if (state.statusPasswordConfirmation === "incorrect") {
                    alert("Las contraseñas no coinciden.")
                } else {
                    alert("Por favor confirme la contraseña")
                }
            }
        } else {
            if (state.statusPassword === "incorrect") {
                alert("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.")
            } else {
                alert("Por favor ingrese un contraseña")
            }
        }
    }

    return (
        <>
        <div className="form_body">
            <div className="header">
                <h1>Security</h1>
                <span>{state.step}</span>
            </div>
            <div className="form_data">

                <div className="input_field">
                    <input type="password" name="password" onChange={handleChangePassword} value={state.password}/>
                    <span>Password</span>
                </div>
    
                <div className="input_field">
                    <input type="password" onChange={handleChangePasswordConfirmation} value={state.repeatPassword}/>
                    <span>Repeat password</span>
                </div>

                <div className="input_field">
                    <input type="password" onChange={handleChangePin} value={state.pin}/>
                    <span>Pin</span>
                </div>
                
            </div>
        </div>
        <div className="footer">
            <button onClick={handleClickBack}>Back</button>
            <button onClick={handleClickNext}>Next</button>
        </div>
        </>
    );
  }
  
  export default Step2;
  