import { createBrowserRouter, RouterProvider } from "react-router"
import RegisterPage from "./pages/RegisterPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage/>
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
