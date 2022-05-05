import React from 'react';

const ZipInput = ({ user, setZip, zip }) => {
  const zipValidation = () => {
    if (zip === '') {
      return <div></div>;
    }
    if (!isNaN(zip) && zip.trim().length === 5) {
      return <div></div>;
    } else {
      return <div className="validation">PSČ musí obsahovat 5 číslic.</div>;
    }
  };
  return (
    <div className="field">
      <label>PSČ</label>
      <input
        type="text"
        name="zip"
        placeholder={user === null ? 'PSČ' : user.zip}
        id="email"
        required
        onChange={(e) => setZip(e.target.value)}
      />
      {zipValidation()}
    </div>
  );
};

export default ZipInput;
