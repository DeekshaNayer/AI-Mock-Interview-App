
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { PublicLayout } from '@/layouts/public-layout';
import AuthencationLayout from '@/layouts/auth-layout';
import {MainLayout} from "@/layouts/main-layout"
import HomePage from '@/routes/home';
import {  SignInPage } from './routes/sign-in';
import {  SignUpPage } from './routes/sign-up';
import ProtectRoutes from './layouts/protected-routes';
import { Generate } from './components/generate';
import { Dashboard } from './routes/dashboard';
import { CreateEditPage } from './routes/create-edit-page';
import { MockLoadPage } from './routes/mock-load-page';
import { MockInterviewPage } from './routes/mock-interview-page';
import { Feedback } from './routes/feedback';

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
          <Route element={<Generate/>} path="/generate" >
          <Route index element={<Dashboard/>}/>
          <Route path=":interviewId" element={<CreateEditPage/>}/>
          <Route path="interview/:interviewId" element={<MockLoadPage/>}/>
           <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
             <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
         </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
