import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigbar from "./components/Navigbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import AllCategories from "./pages/AllCategories";
import Smartphones from "./pages/Smartphones";
import Tablets from "./pages/Tablets";
import Accessories from "./pages/Accessories";
import SmartWatches from "./pages/SmartWatches";
import Headphones from "./pages/Headphones";
import Chargers from "./pages/Chargers";
import CasesCovers from "./pages/CasesCovers";
import SubcategoryPage from "./pages/SubcategoryPage";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Account from "./pages/Account";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Footer from  "./components/Footer/Footer";
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navigbar />
          <main>

            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/categories" element={<AllCategories />} />
              <Route path="/smartphones" element={<Smartphones />} />
              <Route path="/tablets" element={<Tablets />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/smart-watches" element={<SmartWatches />} />
              <Route path="/headphones" element={<Headphones />} />
              <Route path="/chargers" element={<Chargers />} />
              <Route path="/cases-covers" element={<CasesCovers />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
              <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
            </Routes>
          </main>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;