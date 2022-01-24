import {useContext} from 'react';
import {AppContext} from '../../Provider';

function FinalStep() {
    const [inputValues, setInputValues] = useContext(AppContext);

    console.log(inputValues)

    return (
      <>
            <div className="final">
                <div className="final_content">
                  <img src="http://ntn-consultores.com/wp-content/uploads/2017/05/check-mark-11-512.png" width="140" height="140"/>
                </div>
            </div>
      </>
    );
  }
  
  export default FinalStep;
  