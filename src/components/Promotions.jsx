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

// Компонент картки акції
const PromotionCard = ({ title, description, endDate, imageDescription }) => {
    return (
        <motion.div
            className="bg-[#F5ECDA]/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="h-48 bg-[#E2D1B7] flex items-center justify-center">
                <p className="text-yellow-800 text-center italic p-4">{imageDescription}</p>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-yellow-800">{title}</h3>
                    <span className="text-sm bg-yellow-800 text-white px-2 py-1 rounded-full">до {endDate}</span>
                </div>

                <p className="text-yellow-700 mb-4">{description}</p>

                <button className="w-full bg-yellow-800 text-white py-2 px-4 rounded-md font-bold hover:bg-yellow-700 transition-colors">
                    Детальніше
                </button>
            </div>
        </motion.div>
    );
};

// Масив акцій для відображення
const promotions = [
    {
        id: 1,
        title: "Родинний обід -20%",
        description: "Замовляйте 3 або більше страв основного меню та отримуйте знижку 20% на все замовлення. Ідеально для сімейних обідів!",
        endDate: "30.11.2023",
        imageDescription: "Сімейна вечеря з традиційними вірменськими стравами для всієї родини"
    },
    {
        id: 2,
        title: "Хачапурі + вино",
        description: "При замовленні хачапурі по-аджарськи отримайте знижку 30% на келих вірменського вина на ваш вибір.",
        endDate: "15.12.2023",
        imageDescription: "Хачапурі по-аджарськи з келихом червоного вина"
    },
    {
        id: 3,
        title: "Бонусна картка",
        description: "Накопичуйте бонуси з кожного замовлення та отримуйте до 15% кешбеку на наступні замовлення.",
        endDate: "безстроково",
        imageDescription: "Бонусна картка з логотипом Daniel Delivery"
    },
    {
        id: 4,
        title: "Понеділок – день коньяку",
        description: "Щопонеділка 50 мл преміального вірменського коньяку Арарат в подарунок до кожної порції шашлику.",
        endDate: "31.12.2023",
        imageDescription: "Келих коньяку Арарат з порцією ароматного шашлику"
    },
    {
        id: 5,
        title: "Щасливі години 15:00-18:00",
        description: "Знижка 15% на все меню при замовленні з 15:00 до 18:00 у будні дні. Ідеальний час для обіду!",
        endDate: "безстроково",
        imageDescription: "Годинник показує щасливі години для знижки у ресторані"
    },
    {
        id: 6,
        title: "Безкоштовна доставка",
        description: "При замовленні від 800 грн доставка безкоштовна незалежно від вашого місцезнаходження в межах 15 км.",
        endDate: "безстроково",
        imageDescription: "Кур'єр доставляє замовлення до дверей клієнта"
    }
];

// Головний компонент сторінки
function Promotions() {
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
                    Акції та спеціальні пропозиції
                </motion.h1>

                <motion.p
                    className="text-xl text-center text-yellow-800 mb-10 max-w-3xl mx-auto font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Смакуйте автентичну вірменську кухню з найкращими пропозиціями та знижками від Daniel Delivery
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {promotions.map((promo) => (
                        <PromotionCard
                            key={promo.id}
                            title={promo.title}
                            description={promo.description}
                            endDate={promo.endDate}
                            imageDescription={promo.imageDescription}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Promotions; 