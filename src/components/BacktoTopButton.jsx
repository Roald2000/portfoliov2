import { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 0);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`${isVisible ? 'block' : 'hidden'
                } fixed bottom-4 right-4 bg-gray-800 text-white rounded-full z-50 p-2`}
            onClick={scrollToTop}
        >
            Back to Top
        </button>
    );
};

export default BackToTopButton;
