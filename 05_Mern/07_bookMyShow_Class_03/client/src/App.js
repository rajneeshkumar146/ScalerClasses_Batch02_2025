import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Provider } from "react-redux";
import store from './redux/store';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (

    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <ProtectedRoute><Home /></ProtectedRoute>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
