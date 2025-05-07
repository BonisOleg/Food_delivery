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

// Компонент інформації про контакти
const ContactInfo = () => {
    return (
        <motion.div
            className="bg-[#F5ECDA]/80 backdrop-blur-sm p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">Наші контакти</h3>

            <div className="space-y-4">
                <div className="flex items-start">
                    <div className="w-10 h-10 bg-yellow-800 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                        <span>📍</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-yellow-800">Адреса:</h4>
                        <p className="text-yellow-700">м. Київ, вул. Деміївська, 5</p>
                        <p className="text-sm text-yellow-600 mt-1">Працюємо щодня з 10:00 до 22:00</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-10 h-10 bg-yellow-800 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                        <span>📞</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-yellow-800">Телефон:</h4>
                        <p className="text-yellow-700">+380 44 123 45 67</p>
                        <p className="text-yellow-700">+380 67 987 65 43</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-10 h-10 bg-yellow-800 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                        <span>✉️</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-yellow-800">Email:</h4>
                        <p className="text-yellow-700">info@danieldelivery.ua</p>
                        <p className="text-yellow-700">order@danieldelivery.ua</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-10 h-10 bg-yellow-800 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                        <span>🌐</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-yellow-800">Соціальні мережі:</h4>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="text-yellow-800 hover:text-yellow-600 transition-colors">
                                <span className="text-xl">📱</span>
                            </a>
                            <a href="#" className="text-yellow-800 hover:text-yellow-600 transition-colors">
                                <span className="text-xl">📸</span>
                            </a>
                            <a href="#" className="text-yellow-800 hover:text-yellow-600 transition-colors">
                                <span className="text-xl">📘</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Компонент форми зворотного зв'язку
const ContactForm = () => {
    return (
        <motion.div
            className="bg-[#F5ECDA]/80 backdrop-blur-sm p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">Зв'яжіться з нами</h3>

            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-yellow-800 mb-1">Ваше ім'я:</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded border border-yellow-600 bg-[#F5ECDA]/50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        placeholder="Іван Петренко"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-yellow-800 mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded border border-yellow-600 bg-[#F5ECDA]/50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-yellow-800 mb-1">Тема:</label>
                    <select
                        id="subject"
                        className="w-full px-4 py-2 rounded border border-yellow-600 bg-[#F5ECDA]/50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    >
                        <option value="">Оберіть тему</option>
                        <option value="feedback">Відгук про обслуговування</option>
                        <option value="question">Питання про меню</option>
                        <option value="partnership">Співпраця</option>
                        <option value="other">Інше</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-yellow-800 mb-1">Повідомлення:</label>
                    <textarea
                        id="message"
                        rows="5"
                        className="w-full px-4 py-2 rounded border border-yellow-600 bg-[#F5ECDA]/50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        placeholder="Ваше повідомлення..."
                    ></textarea>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full bg-yellow-800 text-white py-3 px-6 rounded-md font-bold hover:bg-yellow-700 transition-colors"
                    >
                        Надіслати
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

// Компонент з картою
const MapComponent = () => {
    return (
        <motion.div
            className="bg-[#F5ECDA]/80 backdrop-blur-sm p-6 rounded-lg shadow-md mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        >
            <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">Як нас знайти</h3>

            <div className="h-[400px] bg-[#E2D1B7] rounded-lg flex items-center justify-center">
                <p className="text-yellow-800 text-center italic">
                    Тут буде карта з місцем розташування ресторану. <br />
                    В реальному проекті тут може бути вбудована Google Maps або подібний сервіс.
                </p>
            </div>
        </motion.div>
    );
};

// Головний компонент сторінки
function Contacts() {
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
                    Контакти
                </motion.h1>

                <motion.p
                    className="text-xl text-center text-yellow-800 mb-10 max-w-3xl mx-auto font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Будемо раді відповісти на ваші запитання та почути відгуки про нашу кухню
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <ContactInfo />
                    <ContactForm />
                </div>

                <MapComponent />
            </main>

            <Footer />
        </div>
    );
}

export default Contacts; 