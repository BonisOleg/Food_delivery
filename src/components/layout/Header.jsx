import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5ECDA]/90 backdrop-blur-sm py-4 px-6 shadow-md">
            <nav className="container mx-auto flex justify-center">
                <ul className="flex space-x-8 md:space-x-12">
                    <li><Link to="/" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm border-b-2 border-yellow-800">Головна</Link></li>
                    <li><Link to="/menu" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm">Меню</Link></li>
                    <li><Link to="/bar" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm">Бар</Link></li>
                    <li><Link to="/delivery" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm">Доставка</Link></li>
                    <li><Link to="/promotions" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm">Акції</Link></li>
                    <li><Link to="/contacts" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm">Контакти</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 