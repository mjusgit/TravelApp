import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from '../components/Landing';
import { QueryClient } from "react-query";
import  {QueryClientProvider} from 'react-query';
import { LogInForm } from '../components/logIn';
import { SignUpForm } from '../components/signUp';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path='/logIn' element={<LogInForm />} />
        <Route path='/signUp' element={<SignUpForm />} />
      </Routes>
    </Router>
     
    </QueryClientProvider>
  );
}

export default App;
