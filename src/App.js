import { Routes, Route } from 'react-router-dom';
import { Box, Text, Button } from '@chakra-ui/react'
import ReactHooks from './modules/ReactHooks';
import './App.css';

function App() {
  const textStyles = {
    fontSize: '3x1',
    fontWeight: 'bold',
    as: 'ins'
  }


  return (
    <Box>
      <Text sx={textStyles}>
      Ini pakai Tailwind CSS
      </Text>
      <button variant="solid" aria="sm">Test Button</button>
      <Routes>
        <Route path="/react-hooks" element={<ReactHooks />} />
      </Routes>
    </Box>
  );
}

export default App;
