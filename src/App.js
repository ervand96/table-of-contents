import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Users from "./Users/Users";
import Accounts from "./Accounts/Accounts";
import { Provider } from "./context";
import "./App.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/account/:id" element={<Accounts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
