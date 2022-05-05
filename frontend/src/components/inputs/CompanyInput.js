import React from 'react';

const CompanyInput = ({ user, companyName, setCompanyName }) => {
  const companyNameValidation = () => {
    if (companyName === '') {
      return <div></div>;
    }
    if (companyName.trim().length > 1) {
      return <div></div>;
    } else {
      return (
        <div className="validation">
          Název firmy musí obsahovat více než 2 písmena.
        </div>
      );
    }
  };
  return (
    <div className="field">
      <label>Název firmy</label>
      <input
        type="text"
        name="company"
        placeholder={user === null ? 'Název firmy' : user.companyName}
        required
        onChange={(e) => setCompanyName(e.target.value)}
      />
      {companyNameValidation()}
    </div>
  );
};

export default CompanyInput;
