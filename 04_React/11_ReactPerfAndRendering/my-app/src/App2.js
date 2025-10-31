import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

// Example of Dynamic imports.
function App() {
    const [HomePage, setHomePage] = useState(null);
    const [AboutPage, setAboutPage] = useState(null);
    const [ContactPage, setContactPage] = useState(null);

    useEffect(() => {
        // Preload HomePage component
        import('./Components/HomePage').then((module) => setHomePage(() => module.default));
    }, []);

    const loadHomePage = () => {
        import('./Components/HomePage').then((module) => setHomePage(() => module.default));
    };

    const loadAboutPage = () => {
        import('./Components/AboutPage').then((module) => setAboutPage(() => module.default));
    };

    const loadContactPage = () => {
        import('./Components/ContactPage').then((module) => setContactPage(() => module.default));
    };

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" onClick={loadHomePage}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={loadAboutPage}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={loadContactPage}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route path="/contact" element={<ContactPage />}></Route>
                </Routes>
            </div>
        </Router>


    );
}

// How Dynamic Import Optimizes the Code
// Code Splitting:

// Dynamic imports create separate chunks for each component. When you run npm run build, 
// Webpack (the module bundler used by Create React App) will create separate files for 
// HomePage, AboutPage, and ContactPage. These files are only loaded when needed.
// On-Demand Loading:

// Instead of loading all components at once, components are loaded only when a user navigates 
// to the respective route. This reduces the initial load time, making the app faster to start.
// Improved Performance:

// By splitting the code and loading components on-demand, you reduce the size of the initial 
// JavaScript bundle. This can lead to faster page loads and improved performance, especially 
// for users with slower network connections.


export default App;
