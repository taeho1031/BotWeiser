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

                    <div className="col-left">
                        <a href="https://discord.gg/KACdTEutQq" className="link">Discord</a>
                    </div>

                    <div className="col-left">
                        <a href="https://forta.org/legal/" className="link">Term of Service</a>
                    </div>

                    <div className="col-left">
                        <a href="https://forta.org/privacy/" className="link">Privacy Policy</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
