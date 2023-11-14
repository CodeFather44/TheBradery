import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import CheckoutPayment from "./pages/CheckoutPayment";


function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>} />
          <Route path="/CheckoutPayment" element={<CheckoutPayment/>} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
