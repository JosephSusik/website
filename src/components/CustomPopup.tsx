import { FaLocationArrow } from "react-icons/fa";

function CustomPopup({handleClose}:{handleClose:any}) {    

    return(
        <div className="popup-box">
                <div className="popup">
                    <h2>Finished University Courses</h2>
                    <div className="popup-classes">
                        <ul>
                            <a href="https://www.fit.vut.cz/study/course/IAL/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Algorithms and Data Structures</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IPK/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Computer Communications and Networks</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IOS/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Introduction to Software Engineering</li></a>
                            <a href="https://www.fit.vut.cz/study/course/ISU/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Machine Level Programming</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IFJ/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Formal Languages and Compilers</li></a>
                            <a href="https://www.fit.vut.cz/study/course/ISS/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Signals and Systems</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IPP/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Principles of Programming Languages</li></a>
                            <a href="https://www.fit.vut.cz/study/course/ISA/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Network Applications and Network Administration</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IZU/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Fundamentals of Artificial Intelligence</li></a>
                        </ul>
                        <ul>
                            <a href="https://www.fit.vut.cz/study/course/IOS/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Operating Systems</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IDS/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Database Systems</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IZP/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Introduction to Programming Systems</li></a>
                            <a href="https://www.fit.vut.cz/study/course/INC/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Digital Systems Design</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IVS/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Practical Aspects of Software Design</li></a>
                            <a href="https://www.fit.vut.cz/study/course/INP/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Design of Computer Systems</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IZG/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Computer Graphics Principles</li></a>
                            <a href="https://www.fit.vut.cz/study/course/ITU/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>User Interface Programming</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IMS/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Modelling and Simulation</li></a>
                        </ul>
                        <ul>
                            <a href="https://www.fit.vut.cz/study/course/IDM/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Discrete Mathematics</li></a>
                            <a href="https://www.fit.vut.cz/study/course/ILG/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Linear Algebra</li></a>                           
                            <a href="https://www.fit.vut.cz/study/course/IEL/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Electronics for Information Technology</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IMA1/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Mathematical Analysis 1</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IMA2/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Mathematical Analysis 2</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IPT/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Probability and Statistics</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IIS/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Information Systems</li></a>
                            <a href="https://www.fit.vut.cz/study/course/IMP/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Microprocessors and Embedded Systems</li></a>
                            <a href="https://www.fit.vut.cz/study/course/ITW/.en" target="_blank" rel="noreferrer"><li><FaLocationArrow className="arr"/>Web Design</li></a>
                        </ul>
                    </div>
                    <button onClick={handleClose}>Show less</button>
                </div>
        </div>
    );
}

export default CustomPopup;