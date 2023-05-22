import React from 'react';
import PageTemplate from './PageTemplate';
import {theme} from './theme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Routes>
        <Route path="/" element={<PageTemplate activePage="home" />} />
        <Route path="/about" element={<PageTemplate activePage="about" />} />
        <Route path="/publications" element={<PageTemplate activePage="publications" />} />
        <Route path="/contact" element={<PageTemplate activePage="contact" />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
