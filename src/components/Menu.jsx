import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Компоненти хедера і футера (ті самі, що в Home.jsx)
const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5ECDA]/90 backdrop-blur-sm py-4 px-6 shadow-md">
            <nav className="container mx-auto flex justify-center">
                <ul className="flex space-x-8 md:space-x-12">
                    <li><Link to="/" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm">Головна</Link></li>
                    <li><Link to="/menu" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm border-b-2 border-yellow-800">Меню</Link></li>
                    <li><Link to="/bar" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm">Бар</Link></li>
                    <li><Link to="/delivery" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm">Доставка</Link></li>
                    <li><Link to="/promotions" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm">Акції</Link></li>
                    <li><Link to="/contacts" className="text-yellow-800 hover:text-yellow-600 font-bold text-lg transition-colors drop-shadow-sm">Контакти</Link></li>
                </ul>
            </nav>
        </header>
    );
};

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#F5ECDA]/90 backdrop-blur-sm py-3 px-6 shadow-inner">
            <div className="container mx-auto text-center text-yellow-800">
                <p className="text-sm">© 2023 Daniel Delivery. Всі права захищені.</p>
            </div>
        </footer>
    );
};

const BackgroundComponent = () => (
    <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url('/images/background.png')` }}
        aria-hidden="true"
    />
);

// Компонент картки страви
const DishCard = ({ title, description, price }) => {
    return (
        <motion.div
            className="bg-[#F5ECDA]/80 backdrop-blur-sm p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="h-32 bg-[#E2D1B7] rounded mb-4 flex items-center justify-center">
                <p className="text-yellow-800 text-center italic">Візуалізація страви</p>
            </div>
            <h3 className="text-xl font-bold text-yellow-800 mb-2">{title}</h3>
            <p className="text-yellow-700 mb-3">{description}</p>
            <div className="flex justify-between items-center">
                <p className="font-bold text-yellow-800 text-lg">{price} грн</p>
                <button className="bg-yellow-800 text-white py-1 px-4 rounded-full font-medium hover:bg-yellow-700 transition-colors">
                    Замовити
                </button>
            </div>
        </motion.div>
    );
};

// Масив страв для відображення
const dishes = [
    {
        id: 1,
        title: "Шашлик з телятини",
        description: "Ніжне теляче м'ясо, мариноване зі спеціями та приготоване на відкритому вогні",
        price: 320
    },
    {
        id: 2,
        title: "Хінкалі з бараниною",
        description: "Традиційні грузинські вареники з соковитою бараниною та ароматними травами",
        price: 240
    },
    {
        id: 3,
        title: "Хачапурі по-аджарськи",
        description: "Човник із тіста з сиром сулугуні та жовтком яйця",
        price: 190
    },
    {
        id: 4,
        title: "Долма",
        description: "Виноградне листя з начинкою з рису та спецій",
        price: 210
    },
    {
        id: 5,
        title: "Аджапсандалі",
        description: "Овочеве рагу з баклажанів, болгарського перцю, помідорів та зелені",
        price: 180
    },
    {
        id: 6,
        title: "Шашлик зі свинини",
        description: "Соковита свинина, маринована з цибулею та спеціями, приготована на мангалі",
        price: 290
    }
];

// Головний компонент сторінки
function Menu() {
    return (
        <div className="relative w-screen min-h-screen bg-[#F5ECDA]/10">
            <Header />
            <BackgroundComponent />

            <main className="container mx-auto pt-24 pb-20 px-4">
                <motion.h1
                    className="text-4xl font-bold text-center text-yellow-800 mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Меню ресторану
                </motion.h1>

                <motion.p
                    className="text-xl text-center text-yellow-800 mb-10 max-w-3xl mx-auto font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Насолоджуйтесь автентичними стравами кавказької та вірменської кухні,
                    приготованими з любов'ю за традиційними рецептами
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dishes.map((dish, index) => (
                        <DishCard
                            key={dish.id}
                            title={dish.title}
                            description={dish.description}
                            price={dish.price}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Menu; 