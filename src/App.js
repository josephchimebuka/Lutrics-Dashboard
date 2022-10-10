import { Landing , Error, Register } from "./pages";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import {Profile, Privacypolicy,Home, Reports, Services, SharedLayout} from './pages/Dashboard'

function App() {
  return (
   <BrowserRouter> 
   <Routes>
    <Route path="/" element={<SharedLayout/>}>

    <Route index element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/reports" element={<Reports/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/privacy" element={<Privacypolicy/>}/>
    </Route>
    <Route path="/landing" element={<Landing/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="*" element={<Error/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
