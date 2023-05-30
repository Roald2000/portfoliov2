import PTypes from 'prop-types';

import {
    jsLanguageLogo, phpLanguageLogo,
    htmlFrontEndLogo, cssFrontEndLogo, reactFrontEndLogo, tailwindFrontEndLogo,
    nodeBackEndLogo, mysqlBackEndLogo, xamppBackEndLogo, expressBackEndLogo
} from '../assets/svg_imports';

const TechStack = ({ isDarkMode }) => {
    return <section data-aos="fade-out-zoom" id='tools' className={`${isDarkMode ? 'text-black' : 'text-white'}`}>
        <h1 className="text-center text-3xl font-bold">Tools/Technologies Used for Developing Web Applications</h1>
        <hr className="my-6 p-[3px] bg-[#ffb800] border-none " />
        <div className="flex flex-row gap-6 justify-center items-center max-w-[90dvw]">
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
                <img src={htmlFrontEndLogo} className="no-drag w-[150px]" alt="HTML Logo" />
                <img src={cssFrontEndLogo} className="no-drag w-[150px]" alt="CSS Logo" />
                <img src={jsLanguageLogo} className="no-drag w-[150px]" alt="JavaScript Logo" />
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
                <img src={reactFrontEndLogo} className="no-drag w-[150px]" alt="React JS Logo" />
                <img src={tailwindFrontEndLogo} className="no-drag w-[150px]" alt="Tailwind CSS Logo" />
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
                <img src={expressBackEndLogo} className="no-drag w-[150px]" alt="Express JS Logo" />
                <img src={nodeBackEndLogo} className="no-drag w-[150px]" alt="Node JS Logo" />
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-3">
                <img src={xamppBackEndLogo} className="no-drag w-[150px]" alt="XAMPP Logo" />
                <img src={mysqlBackEndLogo} className="no-drag w-[150px]" alt="MySQL Logo" />
                <img src={phpLanguageLogo} className="no-drag w-[150px]" alt="HyperText PreProcessor (PHP) Logo" />
            </div>
        </div>
    </section>
}

export default TechStack

TechStack.propTypes = {
    isDarkMode: PTypes.oneOfType([
        PTypes.bool,
        PTypes.string,
        PTypes.number,
    ])
}