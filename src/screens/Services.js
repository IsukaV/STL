import React, {useState} from 'react';
import './Services.css'
import Navbar from '../components/navbar';
import Dataservice from '../components/dataservice';
import Voiceservice from '../components/voiceservice';
import Roamingservice from '../components/roamingservice';
import ValueAddedservice from '../components/valueaddedservice';

const Services = () => {

    const [currentService, setCurrentService] = useState(1);

    const renderComponent = () => {
        switch (currentService) {
          case 1:
            return <Voiceservice />;
          case 2:
            return <Dataservice />;
          case 3:
            return <Roamingservice />;
          case 4:
            return <ValueAddedservice />;
          default:
            return null;   
     // Handle invalid values
        }
      };

    return (
        <div style={{paddingTop: "100px"}}>
            <Navbar />
            <div class="body-container">
                <div class="services-tabs">
                    <div className={currentService === 1 ? 'active' : ''} onClick={()=>{setCurrentService(1)}}>
                        <p>Voice</p>
                    </div>
                    <div className={currentService === 2 ? 'active' : ''} onClick={()=>{setCurrentService(2)}}>
                        <p>Data</p>
                    </div>
                    <div className={currentService === 3 ? 'active' : ''} onClick={()=>{setCurrentService(3)}}>
                        <p>Roaming</p>
                    </div>
                    <div className={currentService === 4 ? 'active' : ''} onClick={()=>{setCurrentService(4)}}>
                        <p>Value Added</p>
                    </div>
                </div>
                <div> 
                    {renderComponent()}
                    {/* <Dataservice /> */}
                </div>
            </div>
        </div>
    );
};

export default Services