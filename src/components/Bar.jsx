import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';

// Компоненти хедера і футера (ті самі, що в Home.jsx)

const BackgroundComponent = () => (
    <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url('/images/background.png')` }}
        aria-hidden="true"
    />
);

// Компонент для фільтра категорій напоїв
const DrinkCategories = ({ activeCategory, setActiveCategory }) => {
    const categories = ["Усі", "Вино", "Коньяк", "Віскі", "Безалкогольні", "Кава", "Чай"];

    return (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-full transition-colors ${activeCategory === category
                        ? "bg-yellow-800 text-white"
                        : "bg-[#F5ECDA]/70 text-yellow-800 hover:bg-[#F5ECDA]"
                        }`}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

// Компонент картки напою
const DrinkCard = ({ title, description, price, volume }) => {
    return (
        <motion.div
            className="bg-[#F5ECDA]/80 backdrop-blur-sm p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="h-32 bg-[#E2D1B7] rounded mb-4 flex items-center justify-center">
                <p className="text-yellow-800 text-center italic">Візуалізація напою</p>
            </div>
            <h3 className="text-xl font-bold text-yellow-800 mb-2">{title}</h3>
            <p className="text-yellow-700 mb-3">{description}</p>
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-yellow-800 text-lg">{price} грн</p>
                    <p className="text-sm text-yellow-700">{volume}</p>
                </div>
                <button className="bg-yellow-800 text-white py-1 px-4 rounded-full font-medium hover:bg-yellow-700 transition-colors">
                    Замовити
                </button>
            </div>
        </motion.div>
    );
};

// Масив напоїв для відображення
const drinks = [
    {
        id: 1,
        title: "Вірменський коньяк Арарат 5*",
        description: "Преміальний коньяк з ароматами персика, абрикоса та ванілі",
        price: 180,
        volume: "50 мл",
        category: "Коньяк"
    },
    {
        id: 2,
        title: "Червоне сухе вино Сапераві",
        description: "Насичене вино з відтінками чорної смородини та вишні",
        price: 210,
        volume: "150 мл",
        category: "Вино"
    },
    {
        id: 3,
        title: "Віскі Джек Деніелс",
        description: "Американський віскі з м'яким смаком та карамельними нотками",
        price: 190,
        volume: "50 мл",
        category: "Віскі"
    },
    {
        id: 4,
        title: "Лимонад вірменський",
        description: "Освіжаючий лимонад з натуральних фруктів і ягід",
        price: 90,
        volume: "330 мл",
        category: "Безалкогольні"
    },
    {
        id: 5,
        title: "Кава по-східному",
        description: "Міцна кава з кардамоном, приготована в джезві на піску",
        price: 85,
        volume: "100 мл",
        category: "Кава"
    },
    {
        id: 6,
        title: "Чай з гірських трав",
        description: "Ароматний чай з карпатських трав з медом та спеціями",
        price: 75,
        volume: "400 мл",
        category: "Чай"
    }
];

// Головний компонент сторінки
function Bar() {
    // В реальному додатку тут було б useState
    const activeCategory = "Усі";
    const setActiveCategory = () => { }; // просто заглушка для прикладу

    // Фільтрація напоїв за категорією
    const filteredDrinks = activeCategory === "Усі"
        ? drinks
        : drinks.filter(drink => drink.category === activeCategory);

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
                    Барна карта
                </motion.h1>

                <motion.p
                    className="text-xl text-center text-yellow-800 mb-10 max-w-3xl mx-auto font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Великий вибір напоїв на будь-який смак,
                    включаючи автентичні вірменські вина та коньяки
                </motion.p>

                <DrinkCategories
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDrinks.map((drink) => (
                        <DrinkCard
                            key={drink.id}
                            title={drink.title}
                            description={drink.description}
                            price={drink.price}
                            volume={drink.volume}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Bar; 