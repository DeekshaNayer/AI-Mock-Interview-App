import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { PublicLayout } from '@/layouts/public-layout';
import AuthencationLayout from '@/layouts/auth-layout';
import {MainLayout} from "@/layouts/main-layout"
import HomePage from '@/routes/home';
import {  SignInPage } from './routes/sign-in';
import {  SignUpPage } from './routes/sign-up';
import ProtectRoutes from './layouts/protected-routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public route */}
        <Route element={<PublicLayout/>}>
             <Route index element={<HomePage/>}/>
       
        </Route>
        
        {/* authentication layout */}
          <Route element={<AuthencationLayout/>}>
             <Route path="/signin/*" element={<SignInPage/>}/>
             <Route path="/signup/*" element={<SignUpPage/>}/>
        </Route>
        {/* protected routes */}
        <Route
         element={<ProtectRoutes><MainLayout/></ProtectRoutes>}
         >
          {/* add all the protected routes */}
          
         </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
