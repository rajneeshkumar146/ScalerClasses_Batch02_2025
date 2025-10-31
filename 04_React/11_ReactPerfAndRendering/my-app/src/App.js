import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy Load the components.
const HomePage = lazy(() => import('./Components/HomePage'));
const AboutPage = lazy(() => import('./Components/AboutPage'));
const ContactPage = lazy(() => import('./Components/ContactPage'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>


        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
          </Routes>
        </Suspense>

      </div>
    </Router>


  );
}

// Problems That Can Arise in this scenario

// 1. Long Initial Load Time: The initial load time can be significantly high as the browser needs to download a large JavaScript bundle before rendering any content.
// 3. Poor Performance: Large bundle sizes can lead to performance issues, especially on slower networks or less powerful devices.
// 3. Unnecessary Resource Usage: Users might download code for components and features they never interact with, leading to wasted resources.


export default App;
