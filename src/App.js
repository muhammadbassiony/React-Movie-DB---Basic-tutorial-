import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//styles
import { GlobalStyle } from './GlobalStyle';

//components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';



const App = () => (
    <Router className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:movieId' element={<Movie/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
      
      <GlobalStyle />
    </Router>
  );


export default App;
