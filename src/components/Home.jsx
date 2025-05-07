import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Припускаємо, що зображення знаходяться в public/images/
const BACKGROUND_IMAGE_URL = '/images/background.png';
const PLATE_IMAGE_URL = '/images/plate.png';

const Header = () => {
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
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
        aria-hidden="true"
    />
);

const AnimatedPlateComponent = ({ plateControls, textControls }) => {
    const plateVariants = {
        hidden: { x: '100vw', opacity: 0, rotate: 360 },
        visible: {
            x: '0%',
            opacity: 1,
            rotate: 0,
            transition: { delay: 1, duration: 1.5, ease: 'easeOut' },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeIn' },
        },
    };

    return (
        <motion.div
            className="absolute left-[25%] transform -translate-x-1/2 -translate-y-1/2"
            variants={plateVariants}
            initial="hidden"
            animate={plateControls}
        >
            <motion.img
                src={PLATE_IMAGE_URL}
                alt="Restaurant plate"
                className="w-auto h-[35vh] sm:h-[45vh] md:h-[50vh] max-w-full"
            />
            <motion.div
                className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap"
                variants={textVariants}
                initial="hidden"
                animate={textControls}
            >
                <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]">
                    Daniel
                </h1>
                <p className="font-semibold text-xl sm:text-2xl md:text-3xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
                    delivery
                </p>
            </motion.div>
        </motion.div>
    );
};

const DeliveryInfoComponent = ({ deliveryControls }) => {
    const deliveryVariants = {
        hidden: { x: '100vw', opacity: 0 },
        visible: {
            x: '0%',
            opacity: 1,
            transition: { duration: 1, ease: 'easeOut' },
        },
    };

    return (
        <motion.div
            className="absolute top-[65%] right-[15%] transform -translate-y-1/2 w-auto max-w-md text-center"
            variants={deliveryVariants}
            initial="hidden"
            animate={deliveryControls}
        >
            <p className="text-xl sm:text-2xl md:text-3xl text-yellow-800 font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] bg-[#F5ECDA]/30 backdrop-blur-sm py-2 px-4 rounded-lg">
                Смак Вірменії у вас вдома
            </p>
        </motion.div>
    );
};

function Home() {
    const plateAnimationControls = useAnimation();
    const textAnimationControls = useAnimation();
    const deliveryInfoAnimationControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await plateAnimationControls.start('visible');
            await textAnimationControls.start('visible');
            await deliveryInfoAnimationControls.start('visible');
        };
        sequence();
    }, [plateAnimationControls, textAnimationControls, deliveryInfoAnimationControls]);

    return (
        <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
            <Header />
            <BackgroundComponent />
            <AnimatedPlateComponent plateControls={plateAnimationControls} textControls={textAnimationControls} />
            <DeliveryInfoComponent deliveryControls={deliveryInfoAnimationControls} />
            <Footer />
        </div>
    );
}

export default Home; 