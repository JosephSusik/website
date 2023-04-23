import { useEffect, useState } from "react";

function DarkModeToggle() {
    
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleDarkTheme = (value:boolean) => {
        setDarkTheme(value)
    }
    
    
    useEffect(() => {
        const storedPreference = localStorage.getItem('prefersDarkMode');
        if (storedPreference) {
            setDarkTheme(JSON.parse(storedPreference));
        }
      }, []);

    useEffect(() => {
        document.body.className = darkTheme? "dark" : "light";
        localStorage.setItem('prefersDarkMode', darkTheme? "true" : "false")
    }, [darkTheme]);

    return(
        <div className="dark-mode-toggle">
            <p className={`dark-mode-btn ${darkTheme? "dark-mode-chosen" : ""}`} 
            onClick={()=>toggleDarkTheme(true)}>DARK</p>
            <p>|</p>
            <p className={`light-mode-btn ${darkTheme? "" : "light-mode-chosen"}`}
            onClick={()=>toggleDarkTheme(false)}>LIGHT</p>
        </div>  
    );
}

export default DarkModeToggle;