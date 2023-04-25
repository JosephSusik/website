import { useEffect, useMemo, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import ContactForm from "../components/contactForm";

function Homepage() {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    
    const isInViewport1 = useIsInViewport(ref1);
    const isInViewport2 = useIsInViewport(ref2);
    const isInViewport3 = useIsInViewport(ref3);
    
    var today = new Date();
    var born = new Date("7/5/2000") // 7th May 2000
    var age_now = today.getFullYear() - born.getFullYear();
    var m = today.getMonth() - born.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < born.getDate())) {
        age_now--;
    }

    function setTime (prop:string, time:string){
        document.documentElement.style.setProperty(prop, time);
    }


    useEffect(() => {
        isInViewport1? setTime("--time", "0.2s") : setTime("--time", "")
        isInViewport2? setTime("--time2", "0.2s") : setTime("--time2", "")
        isInViewport3? setTime("--time3", "0.2s") : setTime("--time3", "")
    }, [isInViewport1, isInViewport2, isInViewport3]);

    return(
        <>
        <section className="homepage" id="homepage">
            <div className="profile-info" ref={ref2}>
                <div className="profile-name">
                    <h1>Joseph</h1>
                    <h1>Susík</h1>
                </div>
                <h2>Frontend developer</h2>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/josef-sus%C3%ADk-a402241a0/" target="blank"><FaLinkedin className="icon"/></a>
                    <a href="https://github.com/JosephSusik" target="blank"><FaGithub className="icon"/></a>
                    <a href="https://www.instagram.com/joseph_powerlifting/" target="blank"><FaInstagram className="icon"/></a>
                </div>
            </div>
            <img src="./img/profile.jpg" alt="" className="profile-img" ref={ref3}/>
        </section>

        <section className="about" id="about">
            <article ref={ref1}>
                <h1 className="intro">Hello there!</h1>  <br />
                <h1> My name is <span className="emph">Joseph</span>, and I am a {age_now}-year-old computer science student from the Czech Republic.</h1> <br />
                <h1>I have always had a passion for <span className="emph">problem solving</span>, and I am currently studying <a href="https://www.fit.vut.cz/.en" target="blank">Faculty of Information Technology, BUT</a>.</h1> <br />
                <h1>I am particularly interested in <span className="emph">web development</span> and creating innovative and engaging user experiences, and I am constantly <span className="emph">trying to improve my skills</span>.</h1> <br />

                <h1>As a determined and <span className="emph">hardworking</span> individual, I am committed to achieving my career goals 
                    and becoming a great frontend developer. </h1> <br />
                <h1>I believe that my love for coding, combined with my <span className="emph">dedication to learning</span> and growing as a developer,
                    will help me succeed in this exciting and rapidly-evolving field.</h1>      
            </article>
            <div>
                <h1>Tech Stack</h1>
                <ul>
                    <li><FaLocationArrow className="arr"/>TypeScript</li>
                    <li><FaLocationArrow className="arr"/>React</li>
                    <li><FaLocationArrow className="arr"/>HTML</li>
                    <li><FaLocationArrow className="arr"/>CSS</li>
                    <li><FaLocationArrow className="arr"/>Git</li>
                    <li><FaLocationArrow className="arr"/>SQL</li>
                    <li><FaLocationArrow className="arr"/>C</li>
                </ul>
            </div>
        </section>

        <section className="projects" id="projects">
            <h1>PROJECTS</h1>
            <h2>School experiece</h2>
            <ul>
                <li>Algorithms and Data Structures</li>
                <li>Computer Communications and Networks</li>
            </ul>
            <ul>
                <li>Operating Systems</li>
                <li>Database Systems</li>
            </ul>
            <ul>
                <li>Discrete Mathematics</li>
                <li>Linear Algebra</li>                                
            </ul>
            <p>See more</p>

            <h2>React playground</h2>
        </section>

        <section className="contact" id="contact">
            <h1>Get in touch!</h1>
            <ContactForm />
        </section>
        </>
    );
}

export default Homepage;

function useIsInViewport(ref:any) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
}
