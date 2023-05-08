
function ContactForm() {
    const handleClick = () => {
        navigator.clipboard.writeText("joseph.susik@gmail.com");
    }


    return(
        <div className="contact-form">
            <button onClick={handleClick}>joseph.susik@gmail.com</button>
        </div>
    );
}

export default ContactForm;