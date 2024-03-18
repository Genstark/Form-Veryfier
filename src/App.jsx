import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import  HomePage from "./pages/HomePage";
import AllUser from './pages/AllUser';
import Login from './pages/Login';

function App() {

	return (
		<>
			<Router>
                <Routes>

    				<Route exact path='/' element={< HomePage />}></Route>
					<Route exact path="/alluser" element={< AllUser />}></Route>
					<Route exact path="/login" element={< Login />}></Route>
			    
				</Routes>
            </Router>
		</>
	);
}

export default App
