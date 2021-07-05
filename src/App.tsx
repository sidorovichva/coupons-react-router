import React from 'react';
import './App.css';
import ThemeContextProvider from "./contexts/ThemeContext";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

    return (
        <div className="App">
            <ThemeContextProvider>
                <Router>
                    <Header />
                    <Main />
                    <Footer />
                </Router>
            </ThemeContextProvider>
        </div>
    );
}

export default App;