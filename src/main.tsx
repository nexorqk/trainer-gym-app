import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App.tsx";
import { Content } from "./components/Content.tsx";
import { Home } from "./components/Home.tsx";
import { SignIn } from "./components/SignIn.tsx";
import { SignUp } from "./components/SignUp.tsx";
import "./index.css";
import { AuthPage } from "./pages/auth-page.tsx";
import { store } from "./store";
import { PrivateRoute } from "./components/PrivateRoute.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/trainer-gym-app">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="content" element={<Content />} />
            </Route>
          </Route>
          <Route path="/auth" element={<AuthPage />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
