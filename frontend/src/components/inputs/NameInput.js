import React from 'react';

const NameInput = ({ user, name, setName }) => {
  const nameValidation = () => {
    const regexp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

    if (name === '') {
      return <div></div>;
    }
    if (name.match(regexp)) {
      return <div></div>;
    } else {
      return <div className="validation">Zadáváte neplatné znaky</div>;
    }
  };
  return (
    <div className="field">
      <h3>Objednavatel</h3>
      <label>Jméno a příjmení</label>
      <input
        type="text"
        name="name"
        placeholder={user === null ? 'Jméno a příjmení' : user.name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      {nameValidation()}
    </div>
  );
};

export default NameInput;
