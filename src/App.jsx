import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Bar from './components/Bar';
import Delivery from './components/Delivery';
import Promotions from './components/Promotions';
import Contacts from './components/Contacts';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/promotions" element={<Promotions />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
    );
}

export default App; 