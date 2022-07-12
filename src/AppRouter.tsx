import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { LoginPage } from "./pages";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}></Route>
      <Route path="login" element={<LoginPage />} />

      <Route path="*" element={<h1>Not found page</h1>} />
    </Routes>
  );
}
