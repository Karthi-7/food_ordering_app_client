import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import { store } from './constants/store';
import BodyContainer from './components/body/BodyContainer';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import Error from './components/error/Error';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import RestaurantMenu from './components/resMenu/RestaurantMenu';
import Cart from './components/cart/Cart';
import Landing from './components/landing/Landing';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
}
export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Landing />,
        errorElement:<Error />
      },
      {
        path:"/restaurants",
        element:<BodyContainer/>,
        errorElement:<Error />
      }, {
        path:"/about",
        element:<About />,
        errorElement:<Error />
      },
      {
        path:"/contact",
        element:<Contact />,
        errorElement:<Error />
      },
      {
        path:"/cart",
        element:<Cart />,
        errorElement:<Error />
      },
      {
        path:"/Restaurant/menu/:resId",
        element:<RestaurantMenu />,
        errorElement:<Error />
      }

    ],
    errorElement:<Error />
  },
 

])

export default App;
