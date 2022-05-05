import React from 'react';

const AddressInput = ({ address, user, setAddress }) => {
  const addressValidation = () => {
    if (address === '') {
      return <div></div>;
    }
    if (address.trim().length > 2) {
      return <div></div>;
    } else {
      return (
        <div className="validation">Adresa musí být delší než 2 písmena.</div>
      );
    }
  };
  return (
    <div className="field">
      <label>Ulice včetně č.p.</label>
      <input
        type="text"
        name="address"
        placeholder={user === null ? 'Ulice a číslo popisné' : user.address}
        id="Last name"
        required
        onChange={(e) => setAddress(e.target.value)}
      />
      {addressValidation()}
    </div>
  );
};

export default AddressInput;
