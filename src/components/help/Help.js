import React from "react";
import '../help/Help.css';
import { Link} from 'react-router-dom';

const Help = () => {
    return (
        <div>
            <div className="help"></div>
            <div className="dim-overlay"></div>
            <div className="help-navbar-tabs">
                <Link to='/help'
                    className="help-navbar-tab"
                >
                    HELP
                </Link>
            </div>
            <div className="help-content">
                <div className="specific-help">
                    <div className="help-heading">Get Started in Battlefield 1</div>
                    <div className="help-writeup">edeem your code, download and install Battlefield 1</div>
                </div>
                <div className="specific-help">
                    <div className="help-heading"> Battlefield 1 features and game modes</div>
                    <div className="help-writeup">What’s new in Battlefield 1? Explore new features and game modes, 
                        find out which class suits your play-style, and learn how Scraps and Warbonds work.</div>
                </div>
                <div className="specific-help">
                    <div className="help-heading"> Battlefield 1 - Custom Games</div>
                    <div className="help-writeup"> Arriving just in time for Batlefest on November 16, 2016, 
                        Custom Games bring new challenges for all Battlefield 1 players. 
                        Find out more about Fog of War, Hardcore servers and Standard Issue Rifles.</div>
                </div>
                <div className="help-contact"> CONTACT US </div>
            </div>
        </div>
    );
};
export default Help;