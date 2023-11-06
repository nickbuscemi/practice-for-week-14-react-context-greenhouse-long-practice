// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import React, { createContext, useState, useContext } from 'react';

//create the context
const ClimateContext = createContext();

// create the provider componenet
export const ClimateProvider = ({ children }) => {
    // State to hold the temperature
    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(40);
    // The value that will be supplied to any descendants of this provider
    const value = { temperature, setTemperature, humidity, setHumidity };
    // Return the provider component
    return (
        <ClimateContext.Provider value={value}>
            {children}
        </ClimateContext.Provider>
    )
};

export const useClimate = () => {
    const context = useContext(ClimateContext);
    if (context === undefined) {
        throw new Error('useClimate must be used within a CLimateProvider');
    }
    return context;
}