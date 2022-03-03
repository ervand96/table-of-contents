import React from "react";
import {Routes, BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Users from "./Users/Users";
import Accounts from "./Accounts/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/account/:id" element={<Accounts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
