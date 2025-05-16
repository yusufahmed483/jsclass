import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Cheackout from './pages/Cheackout';
import Error from './pages/Error';
import Rootlayout from './layout/Rootlayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
 <Route  path="/"element={<Rootlayout />}>
   <Route   path=""element={<Home />}> </Route>
      <Route   path="Shop"element={<Shop />}> </Route>
      <Route   path="product"element={<Product />}> </Route>
      <Route   path="about"element={<About />}> </Route>
      <Route   path="contact"element={<Contact />}> </Route>
      <Route   path="login"element={<Login />}> </Route>
      <Route   path="singup"element={<Singup />}> </Route>
      <Route   path="account"element={<Account />}> </Route>
      <Route   path="cart"element={<Cart />}> </Route>
      <Route   path="cheackout"element={<Cheackout />}> </Route>
      <Route   path="/*"element={<Error/>}> </Route>
 </Route>
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App