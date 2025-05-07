import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';

// Припускаємо, що зображення знаходяться в public/images/
const BACKGROUND_IMAGE_URL = '/images/background.png';
const PLATE_IMAGE_URL = '/images/plate.png';

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
            className="absolute left-[10%] sm:left-[20%] md:left-[25%] transform -translate-x-1/2 -translate-y-1/2 top-[40%] sm:top-[45%] md:top-[50%]"
            variants={plateVariants}
            initial="hidden"
            animate={plateControls}
        >
            <motion.img
                src={PLATE_IMAGE_URL}
                alt="Restaurant plate"
                className="w-auto h-[25vh] sm:h-[35vh] md:h-[45vh] lg:h-[50vh] max-w-full"
            />
            <motion.div
                className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap"
                variants={textVariants}
                initial="hidden"
                animate={textControls}
            >
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]">
                    Daniel
                </h1>
                <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
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
            className="absolute top-[60%] sm:top-[65%] md:top-[70%] right-[5%] sm:right-[10%] md:right-[15%] transform -translate-y-1/2 w-auto max-w-xs sm:max-w-sm md:max-w-md text-center"
            variants={deliveryVariants}
            initial="hidden"
            animate={deliveryControls}
        >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-800 font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] bg-[#F5ECDA]/30 backdrop-blur-sm py-2 px-4 rounded-lg">
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