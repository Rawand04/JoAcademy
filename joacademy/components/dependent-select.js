import React, { useState } from 'react';

const DependentDropdown = () => {
  // Static country data
  const countries = [
    { id: 1, name: 'USA' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'Other' },
  ];

  // Static city data corresponding to countries
  const cities = {
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
  };

  // State to hold the selected country, city, and other country text
  const [selectedCountry, setSelectedCountry] = useState('');
  const [availableCities, setAvailableCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [otherCountry, setOtherCountry] = useState(''); 

  // Handle country change
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setAvailableCities(cities[country] || []);
    setSelectedCity(''); 
    if (country !== 'Other') {
      setOtherCountry('');
    }
  };

  // Handle city change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // Handle other country input change
  const handleOtherCountryChange = (e) => {
    setOtherCountry(e.target.value);
  };

  return (
    <div className='text-center text-3xl'>
      <h1 className='font-extrabold text-5xl p-10'>Dependent Dropdown Example</h1>

      {/* Country Dropdown */}
      <label htmlFor="country" className='font-bold'>Select Country: </label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      {/* City or Other Country Input */}
      {selectedCountry === 'Other' ? (
        <>
          <label htmlFor="other-country" className='font-bold'>Please specify the country: </label>
          <input
            id="other-country"
            type="text"
            value={otherCountry}
            onChange={handleOtherCountryChange}
            placeholder="Enter country name"
          />
        </>
      ) : (
        selectedCountry && (
          <>
            <label htmlFor="city" className='font-bold'>Select City: </label>
            <select id="city" value={selectedCity} onChange={handleCityChange}>
              <option value="">Select a city</option>
              {availableCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </>
        )
      )}
    </div>
  );
};

export default DependentDropdown;