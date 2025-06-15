import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WeddingInvitation from './pages/v1';
import WeddingInvitationV2 from './pages/v2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WeddingInvitation />} />
        <Route path='/aH6Zr68jap59m62iQEZWdvvVdaZt8K' element={<WeddingInvitationV2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
