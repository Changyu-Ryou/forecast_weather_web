import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useGetNativeEventBridge from './hooks/useGetNativeEventBridge';
import Home from './pages/Home';
import './utils/firebase';
import 'react-spring-bottom-sheet/dist/style.css';
import './styles/bottomsheet.css';

function App(): ReactElement {
  useGetNativeEventBridge();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
