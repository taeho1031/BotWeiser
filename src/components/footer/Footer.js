import React from "react";
import "./Footer.css";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-col">
                        <a href="https://forta.org/" className="footer-link" >
                            &copy;{new Date().getFullYear()} Forta Foundation
                        </a>
                        
                    </div>

                    <div className="footer-col">
                        <a href="https://discord.gg/KACdTEutQq" className="footer-link">Discord</a>
                    </div>

                    <div className="footer-col">
                        <a href="https://forta.org/legal/" className="footer-link">Term of Service</a>
                    </div>

                    <div className="footer-col">
                        <a href="https://forta.org/privacy/" className="footer-link">Privacy Policy</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
