import React from 'react';

const CityInput = ({ user, city, setCity }) => {
  const cityValidation = () => {
    if (city === '') {
      return <div></div>;
    }
    if (city.trim().length > 1) {
      return <div></div>;
    } else {
      return (
        <div className="validation">
          Město musí obsahovat více než 1 písmeno.
        </div>
      );
    }
  };
  return (
    <div className="field">
      <label>Město</label>
      <input
        type="text"
        name="city"
        placeholder={user === null ? 'Město' : user.city}
        id="First name"
        required
        onChange={(e) => setCity(e.target.value)}
      />
      {cityValidation()}
    </div>
  );
};

export default CityInput;
