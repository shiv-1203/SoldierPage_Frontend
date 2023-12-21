import React, { useState, useEffect } from "react";
import soldierPic from "../../asserts/images/soldier__pic.png";
import logo from '../../asserts/images/home__level-icon.png';
import './MainContent.css';
import img1 from '../../asserts/images/BF4_Celebration_Dog_Tag.png';
import img2 from '../../asserts/images/premium dog tag.png';
import emblem from '../../asserts/images/soldier__BFemblem.png';

const MainContent = () => {
    const [data, setData] = useState([]);
    const [dominance, setDominance] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [bright, setBright] = useState(false);
    const [brightIndex, setBrightIndex] = useState(null);

    const calculatePercentage = (maxvalue, minValue) => {
        return ((minValue) / (maxvalue)) * 100;
    };

    const changeBrightnessEnter = (index) => {
        setBrightIndex(index);
        setBright(true);
    };

    const changeBrightnessLeave = () => {
        setBright(false);
        setBrightIndex(null);
    };

    useEffect(() => {
        // Fetch data from the backend
        fetch('https://soldierpage-backend.onrender.com/api/datatable')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));

        fetch('https://soldierpage-backend.onrender.com/api/dominanceTable')
            .then((response) => response.json())
            .then((data) => setDominance(data))
            .catch((error) => console.error('Error fetching data:', error));

        fetch('https://soldierpage-backend.onrender.com/api/vehicles')
            .then((response) => response.json())
            .then((data) => setVehicles(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="mainContent">
            <img className='emblem' src={emblem}></img>
            <div className="soldierAndOtherPic">
                <img src={soldierPic} className="soldierPic"></img>
                <img src={img1} className='img1' ></img>
                <img src={img2} className='img2'></img>
            </div>
            <div className='mainContentDetails'>
                <div className='nameAndRank'>
                    <div className='cookieName'>
                        <img className="logo" src={logo}></img>
                        <div className='cookieText'>
                            <span className="soldierName">cookie</span>
                            <span className="soldierText">
                                <span className="soldierRank">63</span>
                                <span style={{ marginLeft: "10px" }}>69,840 / 110,000 <span style={{ color: 'grey' }}>- Estimated rank up in 1h</span></span>
                            </span>
                        </div>
                    </div>
                    <div className="data" style={{ borderTop: '1px solid rgba(128, 128, 128, 0.348)'}}>
                        {data.map((data) => (
                            <div className="dataDesc">
                                <span style={{ marginTop: '5px' }}>{data.tool.toUpperCase()}</span>
                                {data.have !== undefined ? (<div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ textAlign: 'right', marginBottom: '5px' }}>{data.have}/{data.total}</div>
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '5px',
                                            background: '#000',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: `${calculatePercentage(data.total, data.have)}%`,
                                                height: '5px',
                                                background: '#ff9d00',
                                                transition: 'width 2s ease-in-out',
                                            }}
                                        ></div>
                                    </div>
                                </div>) : (<div></div>)}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='column2Content' style={{ maxWidth: 'fit-content' }}>
                    <div className='dominance' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {dominance.map((dominance) => (
                            <div className='dominanceContent' style={{ display: 'flex', flexDirection: 'column' }}>
                                <span>{dominance.tool.toUpperCase()}</span>
                                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{dominance.have}</span>
                            </div>
                        ))}
                    </div>
                    <span className='vehicleText'>
                        {vehicles.map((vehicle, index) => (
                            <span key={index} className="vehicleDesc"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginBottom: '8px'

                                }}
                                onMouseEnter={() => changeBrightnessEnter(index)}
                                onMouseLeave={changeBrightnessLeave}
                            >
                                <span style={{ color: 'grey', fontWeight: 'bold', marginBottom: '5px' }}>{vehicle.category.toUpperCase()}</span>
                                <img
                                    src={`https://soldierpage-backend.onrender.com/images/${vehicle.image}`}
                                    alt={vehicle.name}
                                    style={{
                                        width: index < 2 ? '100%' : (index === 2 ? '50px' : '80px'),
                                        height: index < 2 ? 'auto' : (index === 2 ? '50px' : '60px'),
                                        filter: bright ? (brightIndex === index ? 'brightness(0%)' : 'brightness(100%)') : 'brightness(100%)',
                                        alignSelf: 'center'
                                    }}
                                />
                                <span style={{ marginTop: '5px' }}>{vehicle.name}</span>
                                <span style={{ color: 'grey', position: 'sticky', bottom: '0' }}>{vehicle.killsScore}</span>

                            </span>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );

}
export default MainContent;