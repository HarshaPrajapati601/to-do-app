import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import ToDo from './components/toDo/ToDo';

const App = () => {

    return(
        <div >
            <BrowserRouter>
            <Header />
            <div style={{padding: 20}}>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<ToDo />} />
                <Route path="/search" element={<SearchBar />} />
            </Routes>
            </div>
            </BrowserRouter>
        </div>
    )


}

export default App;