
import {Container} from '@mui/material'
import {ThemeProvider} from '@mui/system'
import { useEffect } from 'react';
import { Appbar } from './components/Appbar';
import {Banner} from './components/Banner';
import Products from './components/Products';
import Promos from './components/Promos';
import theme from './styles/theme'


function App() {

  useEffect(() => {
    document.title = "React Material UI - Home"
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{background: '#fff'}}>
      
        <Appbar />
        <Banner />
        <Promos />
        <Products />
       { 
        /**
         * Title
         * Products
         * Footer
         * Search
         * Appdrawer
         */ 
      }
    </Container>
    </ThemeProvider>
    
    
  );
}

export default App;
