import Login from "./pages/LoginPage/LoginForm";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import store from "./redux/store";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
