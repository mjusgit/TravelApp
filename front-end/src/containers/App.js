import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from '../components/Landing';
import { QueryClient } from "react-query";
import  {QueryClientProvider} from 'react-query';
import { LogInForm } from '../components/LogIn';
import { SignUpForm } from '../components/SignUp';
import  Cities  from '../components/Cities';//vscode-app/c:/Users/Julia/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html
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
