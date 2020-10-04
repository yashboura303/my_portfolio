import React, { Component } from "react";
import "./Hero.css";
import Photo from "../../Assets/Images/selfff.jpeg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: props.loaded,
        };
    }

    componentDidMount() {
        let TL = gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "restart none none reset",
                },
            })
            .from(
                ".image>img",
                { y: 100, opacity: 0, ease: "back", duration: 1 },
                "<1"
            )
            .from(
                ".about>*",
                {
                    x: -100,
                    opacity: 0,
                    ease: "back",
                    duration: 1,
                    stagger: 0.2,
                },
                "<1"
            );
        TL.pause();
        if (this.state.loaded) {
            TL.play();
        }
    }

    componentWillReceiveProps({ loaded }) {
        this.setState({ loaded });
    }

    render() {
        return (
            <section className="hero animated fadeIn">
                <div className="row">
                    <div className="about">
                        <h4 className="compliment">
                            Hey THERE{" "}
                            <span role="img" aria-label="Hi!">
                                🙂
                            </span>
                            , I'm
                        </h4>
                        <h1 className="intro">Yash Boura</h1>
                        <p className="bio">
                            I'm a Full stack developer and a computer
                            engineering student from Mumbai University
                        </p>
                        <div className="hero-cta">
                            <ul className="socials">
                                <li>
                                    <a href="https://www.linkedin.com/in/yash-boura">
                                        <span className="icon icon-moonlinkedin"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/yashboura303">
                                        <span className="icon icon-moongithub"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="./YashBoura_Resume.pdf">
                                        <span className="icon icon-moonfile-pdf"></span>
                                    </a>
                                </li>
                            </ul>
                            <a href="#portfolio">
                                <span>
                                    Read About Me{" "}
                                    <span className="icon icon-moonarrow-down2"></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="image">
                        <img src={Photo} alt="" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;
