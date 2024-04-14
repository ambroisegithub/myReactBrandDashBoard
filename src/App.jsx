import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Dashboard/Home";
import Users from "./Components/Dashboard/Users";


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
