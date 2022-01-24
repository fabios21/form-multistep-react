import './App.css';
import Provider from './Provider';
import Form from './Provider/components/Form';

function App() {
  return (
    <Provider>
      <div class="form">
            <div className="card">
              <div>
                {
                <Form />
                }
              </div>
            </div>
        </div>
    </Provider>
  );
}

export default App;
