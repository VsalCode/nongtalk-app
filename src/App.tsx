import { createBrowserRouter, RouterProvider } from "react-router"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
