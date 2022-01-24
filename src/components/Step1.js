import {useContext, useState} from 'react';
import {AppContext} from '../../Provider';

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
    } else {
      if (state.statusEmail === "incorrect") {
        alert("Formato del Email es incorrecto")
      } else {
        alert("Por favor ingrese un correo")
      }
    }
  }

  return (
    <>
       <div className="form_body">
          <div className="header">
              <h1>Basic Details</h1>
              <span>{state.step}</span>
          </div>

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
              </div>
          </div>
      </div>
      <div className="footer">
            <button onClick={handleClick}>Next</button> 
      </div>
      </>
    );
  }
  
  export default Step1;
  