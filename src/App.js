import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ColorModeProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './components/Home';
import CoinDetails from './components/CoinDetails';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer'; // Add this import for the Footer component

function App() {
  return (
    <ColorModeProvider>
      <Router>
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          bg={"background"} // Background color managed by Chakra UI theme
        >
          <Header />

          <Box flex="1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coins" element={<Coins />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/coin/:id" element={<CoinDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Box>

          <Footer /> {/* Add the Footer at the bottom */}
        </Box>
      </Router>
    </ColorModeProvider>
  );
}

export default App;
