import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import axios from 'axios';

const AddressAutocomplete = ({ setTitle }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState('');


  useEffect(() => {
    setTitle('Address Book'); // Update the title by calling the setTitle function
  }, []);

  const onAddressSelect = (e) => {
    setSelectedAddress(e.value);
    setAddressLine1(e.value.addressLine1 || '');
    setAddressLine2(e.value.addressLine2 || '');
    setCity(e.value.city || '');
    setState(e.value.state || '');
    setCountry(e.value.country || '');
    setZipcode(e.value.zipcode || '');
  };

  const completeAddress = async (event) => {
    const value = event.query;
    const apiKey = '';
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=address&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const predictions = response.data.predictions;

      const suggestions = predictions.map((prediction) => {
        const addressComponents = prediction.structured_formatting.secondary_text.split(', ');
        const address = addressComponents[0];
        const city = addressComponents[1];
        const state = addressComponents[2];
        const country = addressComponents[3];
        const zipcode = addressComponents[4];

        return {
          label: prediction.description,
          addressLine1: address,
          addressLine2: '',
          city,
          state,
          country,
          zipcode,
        };
      });

      setAddressSuggestions(suggestions);
    } catch (error) {
      console.error('Error fetching address suggestions:', error);
    }
  };

  const [addressSuggestions, setAddressSuggestions] = useState([]);

  return (
    <div>
      <h3>Address Autocomplete</h3>
      <AutoComplete
        value={selectedAddress}
        suggestions={addressSuggestions}
        completeMethod={completeAddress}
        field="label"
        dropdown
        onChange={(e) => setSelectedAddress(e.value)}
        onSelect={onAddressSelect}
      />
      <div>
        <label>Address Line 1:</label>
        <input
          type="text"
          value={addressLine1}
          readOnly
        />
      </div>
      <div>
        <label>Address Line 2:</label>
        <input
          type="text"
          value={addressLine2}
          readOnly
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={city}
          readOnly
        />
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          value={state}
          readOnly
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          value={country}
          readOnly
        />
      </div>
      <div>
        <label>Zipcode:</label>
        <input
          type="text"
          value={zipcode}
          readOnly
        />
      </div>
    </div>
  );
};

export default AddressAutocomplete;
