import { Landing , Error, Register } from "./pages";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import {Profile, Privacypolicy, Home, Reports, HeatMap, Services, SharedLayout} from './pages/Dashboard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <BrowserRouter> 
   <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/dashboard" element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="reports" element={<Reports/>}/>
      <Route path="heatmap" element={<HeatMap/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="privacy" element={<Privacypolicy/>}/>
    </Route>
    <Route path="/register" element={<Register/>}/>
    <Route path="*" element={<Error/>}/>
   </Routes>
   <ToastContainer position= 'top-center'/>
   </BrowserRouter>
  );
}

export default App;
