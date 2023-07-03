import PTypes from 'prop-types';

const SkillSection = ({ isDarkMode }) => {
    return <section data-aos="fade-in-zoom" id='skills' className={`${isDarkMode ? 'text-black' : 'text-white'}`}>
        <h1 className="text-3xl text-center font-bold">Skills</h1>
        <hr className="my-6 p-[3px] bg-[#ffb800] border-none " />
        <div className="flex flex-col gap-6 justify-center items-center max-w-[90dvw]">
            <div data-aos="fade-up">
                <h1 className={`text-2xl w-fit p-3 rounded-md ${!isDarkMode ? 'text-[#ffb800] bg-white' : ' bg-[#ffb800] text-white'}`}>
                    Front-End Web Development
                </h1>
                <br />
                <p className="pl-6 text-justify">
                    Proficient in creating visually appealing and responsive user interfaces using HTML, CSS, and JavaScript. Skilled in utilizing front-end frameworks such as ReactJS and TailwindCSS to build interactive web applications that enhance user experience.
                </p>
            </div>
            <div data-aos="fade-up">
                <h1 className={`text-2xl w-fit p-3 rounded-md ${!isDarkMode ? 'text-[#ffb800] bg-white' : ' bg-[#ffb800] text-white'}`}>
                    Back-End Web Development</h1>
                <br />
                <p className="pl-6 text-justify">
                    Experienced in developing server-side applications and databases using Node.js or PHP. Proficient in designing and implementing RESTful APIs to facilitate seamless communication between the front-end and back-end components of web applications.
                </p>
            </div>
            <div data-aos="fade-up">
                <h1 className={`text-2xl w-fit p-3 rounded-md ${!isDarkMode ? 'text-[#ffb800] bg-white' : ' bg-[#ffb800] text-white'}`}>
                    RESTful API Development</h1>
                <br />
                <p className="pl-6 text-justify">
                    Well-versed in designing and implementing RESTful APIs, adhering to industry best practices and standards. Experienced in creating endpoints, handling authentication, and managing data transfer between clients and servers.
                </p>
            </div>
        </div>
    </section>
}

export default SkillSection

SkillSection.propTypes = {
    isDarkMode: PTypes.oneOfType([
        PTypes.bool,
        PTypes.string,
        PTypes.number,
    ])
}