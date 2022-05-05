import React, { useContext } from 'react';
import { UserContext } from '../components/context/UserContext';
import SimpleLineChart from '../components/charts/SimpleLineChart';

const UserDashboard = () => {
  const { user } = useContext(UserContext);

  console.log(user);
  return (
    <div className="ui middle aligned stackable grid container">
      <div className="row">
        <div className="five wide column" style={{ marginTop: '50px' }}>
          <div className="ui vertical pointing menu">
            <a className={`item `}>Aktivní uživatele</a>
            <a className={`item `}>Přidat uživatele</a>
            <a className={`item `}>Muj profil</a>
          </div>
        </div>
        <div className="/ten wide column"></div>
      </div>
    </div>
  );
};

export default UserDashboard;
