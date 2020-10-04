import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="contact">
                    <a href="mailto:yashboura303@gmail.com">
                        <span className="icon icon-moonmail4"></span> Contact Me
                    </a>
                    <ul className="socials">
                        <li>
                            <a
                                href="./YashBoura_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon icon-moonfile-pdf"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/yash-boura"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon icon-moonlinkedin"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/yashboura303"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon icon-moongithub"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <p>
                    Made with <span className="icon icon-moonheart"></span> by
                    <a
                        href="https://www.instagram.com/yashboura/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        Yash Boura
                    </a>
                </p>
            </footer>
        );
    }
}

export default Footer;
