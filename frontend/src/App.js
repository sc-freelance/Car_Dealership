import LoginPanel from "./components/Login/Login"
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer";
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import DealerForm from './components/Pages/DealerForm'
import AllReviews from './components/Pages/Reviews/AllReviews'
import PostReview from './components/Pages/Reviews/PostReview'
import DealerRegister from './components/Pages/DealerRegister'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dealers" />} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/dealer/:id" element={<Dealer />} />
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/dealer-form" element={<DealerForm />} /> */}
      <Route path="/dealer/:dealerId/review" element={<DealerForm />} /> 
      <Route path="/reviews" element={<AllReviews />} />
      <Route path="/post-review" element={<PostReview />} />
      <Route path="/dealer-register" element={<DealerRegister />} />
    </Routes>
  );
}

export default App;