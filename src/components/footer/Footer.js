import React from "react";
import "./Footer.css";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="https://forta.org/" className="link" >
                            &copy;{new Date().getFullYear()} Forta Foundation
                        </a>
                        
                    </div>

                    <div className="col">
                        <a href="https://app.forta.network/bots" className="link">Explore Bots</a>
                    </div>

                    <div className="col">
                        <a href="https://discord.gg/KACdTEutQq" className="link">Discord</a>
                    </div>

                    <div className="col">
                        <a href="https://forta.org/legal/" className="link">Term of Use</a>
                    </div>

                    <div className="col">
                        <a href="https://forta.org/privacy/" className="link">Privacy Policy</a>
                    </div>

                </div>
                {/* <ul className="footerMenu">
                    <li>
                        <a href="http://forta.org" className="link">
                            &copy;{new Date().getFullYear()} Forta Foundation
                        </a>
                    </li>
                    <li>
                        <a href="http://forta.org" className="link">
                            Full Bot List
                        </a>
                    </li>
                </ul> */}
                <div className="row">
                    {/* <h4>next page</h4> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;
