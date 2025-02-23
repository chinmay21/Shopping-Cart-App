import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import App from './App.jsx'
import { store } from './Redux/Store.js';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>
)
