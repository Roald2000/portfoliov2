import PTypes from 'prop-types';

const IntroSection = ({ isDarkMode }) => {
    return <section data-aos="fade-down" id='intro' className={`${isDarkMode ? 'text-black' : 'text-white'}`}>
        <div className="p-3 rounded-md  min-w-[70dvw] max-w-[60dvw] w-[80dvw]">
            <h1 className="text-3xl">Hi! My name is <span className={`p-2 rounded ${!isDarkMode ? 'bg-[#ffb800] text-[#1c1c1c]' : 'bg-[#1c1c1c] text-[#ffb800]'}`}>Roald</span></h1>
            <br />
            <p className="text-justify text-xl">
                Welcome to my portfolio! I{"'"}m a web developer specializing in back-end development with expertise in building RESTful APIs using MySQL, XAMPP, Node.js, and Express.js. While my primary focus is on the back-end, I also have knowledge of front-end technologies such as HTML, CSS, and JavaScript. Although I may not consider myself a front-end expert, I strive to create functional and visually appealing interfaces. Feel free to explore my <a className="p-1 rounded-md bg-blue-500 text-white" href="https://github.com/Roald2000" target="_blank" rel="noreferrer">GitHub</a> to see examples of my work in API development and front-end projects. Thank you for visiting!
            </p>
        </div>
    </section>
}

export default IntroSection

IntroSection.propTypes = {
    isDarkMode: PTypes.oneOfType([
        PTypes.bool,
        PTypes.string,
        PTypes.number,
    ])
}


