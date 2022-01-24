import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [state, setState] = useState({
        step: 1,
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeatPassword: "",
        pin: "",
        phone: "",
        country: "",
        state: "",
        statusEmail: "",
        statusPassword: "",
        statusPasswordConfirmation: "",
        statusPin: "",
        statusPhone: ""
    });

    return (            
            <AppContext.Provider value={[state, setState]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();