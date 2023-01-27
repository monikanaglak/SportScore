import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Error } from "./pages/error";
import { UserApi } from "./pages/userApi";
import { User } from "./pages/user";
//main componant
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<UserApi />}></Route>
        <Route path="/userMock/:id" element={<User />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
