import {useContext, useState} from 'react';
import {AppContext} from '../Provider';

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
        if (state.statusPassword === "ok" && state.statusPasswordConfirmation === "ok" && state.statusPin === "ok") {
            setState({...state, step: state.step + 1})
        } 
    }

    return (
        <>
        <div className="form_body">
            <div className='base-span'>
                <div>
                <span className='base'></span>
                </div>
                <div className="header">
                    <span className='span-step2'>Step {state.step}  (50%)</span>
                </div>
            </div>

            <h1>Security</h1>

            <div className="form_data">

                <div className="input_field">
                    <input type="password" name="password" onChange={handleChangePassword} value={state.password}/>
                    <span>Password</span>
                    {
                    state.statusPassword === "incorrect" ? <p className='warning'>Invalid password - Use numbers, lowercase letters and uppercase letters</p> :
                    state.statusPassword === "" ? <p className='warning'>*Required field</p> :
                    <></>
                    }
                </div>
    
                <div className="input_field">
                    <input type="password" onChange={handleChangePasswordConfirmation} value={state.repeatPassword}/>
                    <span>Repeat password</span>
                    {
                    state.statusPasswordConfirmation === "incorrect" ? <p className='warning'>Passwords do not match</p> :
                    state.statusPasswordConfirmation === "" ? <p className='warning'>*Required field</p> :
                    <></>
                    }
                </div>

                <div className="input_field">
                    <input type="password" onChange={handleChangePin} value={state.pin}/>
                    <span>Pin</span>
                    {
                    state.statusPin === "incorrect" ? <p className='warning'>Invalid pin - Enter a 4 digit pin</p> :
                    state.statusPin === "" ? <p className='warning'>*Required field</p> :
                    <></>
                    }
                </div>
                
            </div>
        </div>
        <div className="footer">
            <button onClick={handleClickBack}>Back</button>
            {
            (state.statusPassword === "incorrect" || state.password === "" || state.statusPasswordConfirmation === "incorrect" || state.statusPasswordConfirmation === "" || state.statusPin === "incorrect" || state.pin === "") ?
            <button className='disabled'>Next</button> :
            <button onClick={handleClickNext}>Next</button>
            }
        </div>
        </>
    );
  }
  
  export default Step2;
  