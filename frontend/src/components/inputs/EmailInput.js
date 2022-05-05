import React from 'react';

const EmailInput = ({ email, setEmail, user }) => {
  const emailValidation = () => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
      return <div></div>;
    }
    if (!email.toLowerCase().match(regexp)) {
      return <div className="validation">Email není ve správném tvaru.</div>;
    } else {
      return <div></div>;
    }
  };
  return (
    <div className="field">
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder={user === null ? 'Email' : user.email}
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailValidation()}
    </div>
  );
};

export default EmailInput;
