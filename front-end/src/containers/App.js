import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from '../components/Landing';
import { QueryClient } from "react-query";
import  {QueryClientProvider} from 'react-query';
import { LogInForm } from '../components/logIn';
import { SignUpForm } from '../components/signUp';
import  Cities  from '../components/Cities';
import CityItineraryPage from "../components/CityItineraryPage";
import {Navbar} from '../components/NavBar';
import {Account} from "../components/Account";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path='/logIn' element={<LogInForm />} />
        <Route path='/signUp' element={<SignUpForm />} />
        <Route path='/cities' element={<Cities />} />
        <Route path="/city/:cityId" element={<CityItineraryPage />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </Router>
     
    </QueryClientProvider>
  );
}

export default App;
