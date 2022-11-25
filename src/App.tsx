import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Box, ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { createTheme } from '@mui/material';

const theme = createTheme({});

function App() {
  return <ThemeProvider theme={theme}>
    <Box
    component="main"
    sx={{
      height: "100vh",
      //backgroundColor: "#000",

    }}>
      <Header />
      <Layout>
        <h1>Ola</h1>
      </Layout>
    </Box>
  </ThemeProvider>;
}
export default App;
