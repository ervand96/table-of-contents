import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Users from "./Users/Users";
import DataUser from "./Accounts/Accounts";
import { UsersProvider } from "./context";
import "./App.css";

function App() {
  return (
    <UsersProvider >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/account/:id" element={<DataUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UsersProvider>
  );
}

export default App;
