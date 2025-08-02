import { createBrowserRouter, RouterProvider } from "react-router"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import AddFriendPage from "./pages/AddFriendPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/add-friend",
    element: <AddFriendPage/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
