import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

import Home from './pages/Home';
import './scss/app.scss';
import React from 'react';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import Cart from './pages/Cart';
import NotFound from './components/errors/NotFound';

export const SearchContext = React.createContext();
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div class='wrapper'>
          <Header />

          <div class='content'>
            <div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
                <Route path='cart' element={<Cart />} />
              </Routes>
            </div>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
