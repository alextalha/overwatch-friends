import './App.css';

import Login from './view/login'
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Login />
      </ToastProvider>
    </div>
  );
}

export default App;
