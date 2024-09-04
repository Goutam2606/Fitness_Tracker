import { ThemeProvider, styled } from 'styled-components';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lightTheme } from './utils/Themes';
import Authentication from './pages/Authentication';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [user, setUser] = useState(true);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {user ? (
          <Container>
            <Navbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/workouts' element={<Workouts />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
