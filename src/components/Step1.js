import {useContext, useState} from 'react';
import {AppContext} from '../Provider';

function Step1() {

  const [state, setState] = useContext(AppContext);

  function handleChange (event) {
    setState({ ...state, [event.target.name] : event.target.value })
  }

  function handleChangeEmail (event) {
    let values = event.target.value;

    let emailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (emailFormat.test(values)) {
      setState({ ...state, statusEmail: "ok", email: event.target.value })
    } else {
      setState({ ...state, statusEmail: "incorrect", email: event.target.value })
    }
  }

  function handleClick () {
    if (state.statusEmail === "ok") {
      setState({...state, step: state.step+1})
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
              <span className='span-step1'>Step {state.step}  (25%)</span>
            </div>
          </div>

          <h1>Basic Details</h1>
          <div className="form_data">
              <div className="input_field">
                  <input type="text" name="firstname" onChange={handleChange} value={state.firstname}/>
                  <span>First Name </span>
              </div>

              <div className="input_field">
                  <input type="text" name="lastname" onChange={handleChange} value={state.lastname}/>
                  <span>Last Name</span>
              </div>

              <div className="input_field">
                  <input type="email" id="email" onChange={handleChangeEmail} name="email" value={state.email}/>
                  <span>Email</span>
                  {
                    state.statusEmail === "incorrect" ? <p className='warning'>Invalid email</p> :
                    state.statusEmail === "" ? <p className='warning'>*Required field</p> :
                    <></>
                  }
              </div>
          </div>
      </div>
      <div className="footer">
                  {
                    (state.statusEmail === "incorrect" || state.email === "") ? 
                    <button className='disabled'>Next</button>:
                    <button onClick={handleClick}>Next</button>
                  }
             
      </div>
      </>
    );
  }
  
  export default Step1;
  