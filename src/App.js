import Home from "./routes/home/home.component";
import FooterNav from "./routes/footernav/footernav.component";

import { Routes, Route } from "react-router-dom";

const Cart = ()=>{
  return(
    <h1>You're in cart page</h1>
  )
}
const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<FooterNav />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
