

import {Routes,Route,Navigate} from "react-react-dom";
import Login from "./components/Login";
import ProtectedRoute from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";

function App() {
  return(
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route 
      path = "/admin/dashboard"
      element= {
        <ProtectedRoute role = "admin">
          <AdminDashboard/>
        </ProtectedRoute>
      }/>
      <Route 
      path = "/admin/update/:id"
      element= {
        <ProtectedRoute role = "admin">
          <UpdateDashboard/>
        </ProtectedRoute>
      }/>
      <Route 
      path = "/customer/dashboard"
      element= {
        <ProtectedRoute role = "customer">
          <CustomerDashboard/>
        </ProtectedRoute>
      }/>
      <Route path = "*" element = {<navigate to = "/" />}/>
    </Routes>
  )
}

export default App;


