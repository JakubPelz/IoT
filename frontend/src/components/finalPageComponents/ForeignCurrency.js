import React, { useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { ForeignContext } from '../context/ForeignContext';

const ForeignCurrency = () => {
  const { foreign, setForeign } = React.useContext(ForeignContext);

  const URL = 'https://cnbeur.herokuapp.com/';

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(URL);

      const euroString = data;
      const euroFinal = parseFloat(euroString.replace(',', '.')).toFixed(3);
      setForeign(euroFinal);
    })();
  }, []);

  return (
    <div>
      <div>
        Kurz EURA stanovená ČNB k dnešnímu ke dni {moment().format('L')}
      </div>
      <div style={{ marginTop: '15px' }}>
        <h4>{foreign} Kč za 1 EUR</h4>
      </div>
    </div>
  );
};

export default ForeignCurrency;
