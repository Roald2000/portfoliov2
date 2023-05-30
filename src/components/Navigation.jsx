import { Link } from "react-scroll";
import AOS from 'aos';
import { useEffect } from "react";
const Navigation = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <nav>
            <ul>
                <li>
                    <Link
                        to="intro"
                        smooth={true}
                        duration={500}
                        activeClass="active-link"
                        spy={true}
                        offset={-50}
                        onSetActive={() => AOS.refresh()}
                    >
                        Intro
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        activeClass="active-link"
                        spy={true}
                        offset={-50}
                        onSetActive={() => AOS.refresh()}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="tools"
                        smooth={true}
                        duration={500}
                        activeClass="active-link p-2"
                        spy={true}
                        offset={-50}
                        onSetActive={() => AOS.refresh()}
                    >
                        Languages & Frameworks
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;