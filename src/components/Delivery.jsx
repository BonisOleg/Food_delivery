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

// Компонент інформаційної картки
const InfoCard = ({ icon, title, description }) => {
    return (
        <motion.div
            className="bg-[#F5ECDA]/80 backdrop-blur-sm p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-800 rounded-full flex items-center justify-center text-white text-xl">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-yellow-800 ml-4">{title}</h3>
            </div>
            <p className="text-yellow-700">{description}</p>
        </motion.div>
    );
};

// Компонент форми замовлення
const OrderForm = () => {
    return (
        <motion.div
            className="bg-[#F5ECDA]/80 backdrop-blur-sm p-6 rounded-lg shadow-md mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">Оформити доставку</h3>

            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-yellow-800 mb-1">Ім'я:</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 rounded border border-yellow-600 bg-[#F5ECDA]/50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            placeholder="Ваше ім'я"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-yellow-800 mb-1">Телефон:</label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-2 rounded border border-yellow-600 bg-[#F5ECDA]/50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            placeholder="+380 XX XXX XX XX"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="address" className="block text-yellow-800 mb-1">Адреса доставки:</label>
                    <input
                        type="text"
                        id="address"
                        className="w-full px-4 py-2 rounded border border-yellow-600 bg-[#F5ECDA]/50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        placeholder="Вулиця, будинок, квартира"
                    />
                </div>

                <div>
                    <label htmlFor="comment" className="block text-yellow-800 mb-1">Коментар до замовлення:</label>
                    <textarea
                        id="comment"
                        rows="3"
                        className="w-full px-4 py-2 rounded border border-yellow-600 bg-[#F5ECDA]/50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        placeholder="Додаткова інформація щодо замовлення"
                    ></textarea>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full bg-yellow-800 text-white py-3 px-6 rounded-md font-bold hover:bg-yellow-700 transition-colors"
                    >
                        Оформити доставку
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

// Головний компонент сторінки
function Delivery() {
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
                    Доставка страв
                </motion.h1>

                <motion.p
                    className="text-xl text-center text-yellow-800 mb-10 max-w-3xl mx-auto font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Привеземо смачну вірменську кухню прямо до вашого дому чи офісу.
                    Швидко, зручно та з гарантією якості!
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <InfoCard
                        icon="🕒"
                        title="Час доставки"
                        description="Доставка в межах міста займає від 30 до 60 хвилин залежно від віддаленості та завантаженості кухні."
                    />
                    <InfoCard
                        icon="💰"
                        title="Вартість доставки"
                        description="Безкоштовна доставка при замовленні від 500 грн. Для менших замовлень - 80 грн в межах міста."
                    />
                    <InfoCard
                        icon="🛵"
                        title="Зона доставки"
                        description="Доставляємо замовлення в межах міста та до 10 км від кільцевої дороги. Для уточнення зони доставки зателефонуйте нам."
                    />
                </div>

                <OrderForm />
            </main>

            <Footer />
        </div>
    );
}

export default Delivery; 