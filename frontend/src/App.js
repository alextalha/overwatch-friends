import './App.css';

import Routes from './routes';
import { ToastProvider } from 'react-toast-notifications';
import store from '../src/store/';
import { Provider }  from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </Provider>
    </div>
  );
}

export default App;
