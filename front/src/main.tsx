import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from '@components/UserList';
import CreateUser from '@components/CreateUser';
import UpdateUser from '@components/UpdateUser';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route index path="/" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
