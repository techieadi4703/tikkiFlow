import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import DashboardPage from "./pages/DashboardPage";
import PricingPage from "./pages/PricingPage";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Layout from "./components/Layout";

function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="signup/*" element={<SignupPage />} />
        <Route path="signin/*" element={<SigninPage />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="pricing" element={<PricingPage />} />
      </Route>
    </Routes>
  );
};

export default App;
