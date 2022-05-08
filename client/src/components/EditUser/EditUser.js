import React, { useEffect, useContext } from 'react';
import { UserTokenContext } from '../context/UserTokenContext';
import axios from 'axios';
import { getBasePath } from '../utils/pathHelper';

const EditUser = () => {
  const { userToken } = useContext(UserTokenContext);
  useEffect(() => {
    if (userToken === null) {
      console.log('Uživatel nemá token');
    } else {
      axios
        .get(`${getBasePath()}/users`, {
          headers: {
            Authorization: `Bearer ${userToken.access_token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Editovat usera</div>;
};

export default EditUser;
