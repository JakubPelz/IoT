import CustomerInfo from '../../pages/CustomerInfo';
import FinalPage from '../../pages/FinalPage';
import Home from '../../pages/Home';
import Products from '../../pages/Products';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home Page',
  },
  {
    path: '/customer',
    exact: true,
    component: CustomerInfo,
    name: 'Customer Information',
  },
  {
    path: '/products',
    exact: true,
    component: Products,
    name: 'Produkty',
  },
  {
    path: '/final',
    exact: true,
    component: FinalPage,
    name: 'Rekapitulace objednávky',
  },
];

export default routes;
