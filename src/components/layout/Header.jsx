import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setShowAnimation(false);
        } else if (!showAnimation) {
            setShowAnimation(true);
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5ECDA]/90 backdrop-blur-sm py-4 px-6 shadow-md">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex items-center justify-center">
                    {location.pathname !== '/' && (
                        <>
                            <Link to="/" className={`text-yellow-800 hover:text-yellow-600 font-bold transition-colors drop-shadow-sm ${showAnimation ? 'animate-roll-in' : ''}`}>
                                <img src="/images/plate.png" alt="Plate" className="w-12 h-12 object-contain mr-2" />
                            </Link>
                            <span className={`text-yellow-800 text-sm font-semibold ${showAnimation ? 'animate-fade-in' : ''}`}>Даніель Delivery</span>
                        </>
                    )}
                </div>
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
                    onClick={toggleMenu}
                >
                    <span className={`bg-yellow-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                    <span className={`bg-yellow-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-yellow-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </button>
                <ul className="hidden lg:flex space-x-8 md:space-x-12 justify-center w-full items-center">
                    <li><Link to="/" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/') ? 'border-b-2 border-yellow-800' : ''}`}>Головна</Link></li>
                    <li className="text-yellow-800 flex-1 h-0.5 bg-white mx-2"></li>
                    <li><Link to="/menu" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/menu') ? 'border-b-2 border-yellow-800' : ''}`}>Меню</Link></li>
                    <li className="text-yellow-800 flex-1 h-0.5 bg-white mx-2"></li>
                    <li><Link to="/bar" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/bar') ? 'border-b-2 border-yellow-800' : ''}`}>Бар</Link></li>
                    <li className="text-yellow-800 flex-1 h-0.5 bg-white mx-2"></li>
                    <li><Link to="/delivery" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/delivery') ? 'border-b-2 border-yellow-800' : ''}`}>Доставка</Link></li>
                    <li className="text-yellow-800 flex-1 h-0.5 bg-white mx-2"></li>
                    <li><Link to="/promotions" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/promotions') ? 'border-b-2 border-yellow-800' : ''}`}>Акції</Link></li>
                    <li className="text-yellow-800 flex-1 h-0.5 bg-white mx-2"></li>
                    <li><Link to="/contacts" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/contacts') ? 'border-b-2 border-yellow-800' : ''}`}>Контакти</Link></li>
                </ul>
                {isOpen && (
                    <ul className="lg:hidden absolute top-16 left-0 right-0 bg-[#F5ECDA] flex flex-col space-y-4 px-6 py-4 shadow-md z-40 items-center">
                        <li><Link to="/" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/') ? 'border-b-2 border-yellow-800' : ''}`} onClick={toggleMenu}>Головна</Link></li>
                        <li className="text-yellow-800 w-full h-0.5 bg-white my-2"></li>
                        <li><Link to="/menu" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/menu') ? 'border-b-2 border-yellow-800' : ''}`} onClick={toggleMenu}>Меню</Link></li>
                        <li className="text-yellow-800 w-full h-0.5 bg-white my-2"></li>
                        <li><Link to="/bar" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/bar') ? 'border-b-2 border-yellow-800' : ''}`} onClick={toggleMenu}>Бар</Link></li>
                        <li className="text-yellow-800 w-full h-0.5 bg-white my-2"></li>
                        <li><Link to="/delivery" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/delivery') ? 'border-b-2 border-yellow-800' : ''}`} onClick={toggleMenu}>Доставка</Link></li>
                        <li className="text-yellow-800 w-full h-0.5 bg-white my-2"></li>
                        <li><Link to="/promotions" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/promotions') ? 'border-b-2 border-yellow-800' : ''}`} onClick={toggleMenu}>Акції</Link></li>
                        <li className="text-yellow-800 w-full h-0.5 bg-white my-2"></li>
                        <li><Link to="/contacts" className={`text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm ${isActive('/contacts') ? 'border-b-2 border-yellow-800' : ''}`} onClick={toggleMenu}>Контакти</Link></li>
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default Header; 