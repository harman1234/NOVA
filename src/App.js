import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {useCookies} from 'react-cookie'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slides from './components/slides';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Search from './components/Search';
import ExpanSection from './components/Expand-section';
import './components/styles/Section.css'
import Cart from './components/cart';
import Item from './components/Item';
import Auth from './components/Login';
import Error404 from './components/ErrorPage';
import items from './items.json';


function App() {
  const [Color, setColor] = useState("dark");
  const [Cookie, setCookie] = useCookies();
  
  
  return (
    <BrowserRouter>
    <MainContext.Provider value={{Color,setColor,Cookie,setCookie}}>
      <Header />
      <Routes>
        <Route exact path='/' Component={Slides}/>
        <Route exact path='search' Component={Search}/>
        <Route exact path='category/'>
          <Route exact path='men' element={<ExpanSection items={items['men']} cat=''/>}/>
          <Route exact path='women' element={<ExpanSection items={items['women']} cat='w' />}/>
        </Route>
        <Route exact path='/bag' Component={Cart}/>
        <Route exact path='/item/'>
          <Route path='m/:id' element={<Item items = {items['men']}/>}/>
          <Route path='w/:id' element={<Item items = {items['women']}/>}/>
        </Route>
        <Route exact path='/auth/*' element={<Auth />}/>
        <Route exact path='/404' element={<Error404/>}/>
        <Route path='*' element={<Error404/>}/>

      </Routes>
      </MainContext.Provider>
      </BrowserRouter>
  );
}

export default App;
export const MainContext = React.createContext();