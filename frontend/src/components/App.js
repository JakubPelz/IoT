import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes/Routes';
import { UserContext } from './context/UserContext';
import { CardContext } from './context/CardContext';
import { ForeignContext } from './context/ForeignContext';
import TopNavBar from './navBar/TopNavBar';

function App() {
  const [user, setUser] = useState(null);
  const [shopCard, setShopCard] = useState(null);
  const [foreign, setForeign] = useState(null);

  //useMemo Create
  const valueUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  const valueCard = useMemo(
    () => ({ shopCard, setShopCard }),
    [shopCard, setShopCard]
  );
  const valueForeign = useMemo(
    () => ({ foreign, setForeign }),
    [foreign, setForeign]
  );

  return (
    <ForeignContext.Provider value={valueForeign}>
      <CardContext.Provider value={valueCard}>
        <UserContext.Provider value={valueUser}>
          <BrowserRouter>
            <TopNavBar />
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={<route.component />}
                ></Route>
              ))}
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </CardContext.Provider>
    </ForeignContext.Provider>
  );
}

export default App;
