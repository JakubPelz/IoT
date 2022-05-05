import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserFinal = () => {
  const user = useContext(UserContext);

  return (
    <>
      {user.user === null ? (
        <div>Nejsou vyplněny všechny zákaznické údaje.</div>
      ) : (
        <table className="ui celled table">
          <tbody>
            <tr>
              <td data-label="Name">Jmeno:</td>
              <td data-label="Age">{`${user.user.name}`}</td>
              <td data-label="Name">Město:</td>
              <td data-label="Age">{`${user.user.city}`}</td>
            </tr>
            <tr>
              <td data-label="Name">Firma:</td>
              <td data-label="Age">{`${user.user.companyName}`}</td>
              <td data-label="Name">Ulice:</td>
              <td data-label="Age">{`${user.user.address}`}</td>
            </tr>
            <tr>
              <td data-label="Name">Email:</td>
              <td data-label="Age">{`${user.user.email}`}</td>
              <td data-label="Name">PSČ:</td>
              <td data-label="Age">{`${user.user.zip}`}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserFinal;
