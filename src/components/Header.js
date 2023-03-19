import { useContext } from 'react';
import { ThemeContext } from "./Layout";

function Header() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <div>
                        <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
                    </div>
                    <div className={theme}>
                        <h4 className={
                            theme === "light" ?
                                "header-title" : 
                                "header-title text-light"
                        }>
                            Silicon Valley Code Camp
                        </h4>
                    </div>
                    <div className={
                        theme === "light" ?
                            "text-dark" :
                            "text-light"
                    }>
                        Hello Mr. Smith &nbsp;&nbsp;
                        <span><a href="#">Sign-out</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;