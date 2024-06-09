import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
//import BrowserRouter dari react router
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//import RecoilRoot dari Recoil
import { RecoilRoot } from 'recoil';

const queryclient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
      <QueryClientProvider client={queryclient}>
        <App />
      </QueryClientProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
