import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";


function ContactForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [ready, setReady] = useState(false);

    const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const sendMail = () => {
        
    }

    useEffect(() => {
        
        name&&email? setReady(true) : setReady(false);

    }, [name, email])


    return(
        <div className="contact-form">
            <div className="contact-name">
                <label htmlFor="name">Name</label>
                <input type="text" id="name"
                    value={name}
                    onChange={handleName}
                    placeholder="Jane Doe"
                />
            </div>
            <div className="contact-email">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" 
                    placeholder="jane.doe@gmail.com"
                    value={email}
                    onChange={handleEmail}
                />
            </div>
            <div className="contact-text">
                <label htmlFor="text">Your message</label>
                <textarea name="" id="text" 
                    placeholder="Text of your message"
                    ></textarea>
            </div>
            <div className="contact-send">
                {ready?
                    <button><FaPaperPlane className="contact-plane" onClick={sendMail}/>&ensp;Send</button>
                :
                    <></>
                }
            </div> 
        </div>
    );
}

export default ContactForm;