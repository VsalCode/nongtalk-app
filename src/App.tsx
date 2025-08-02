import { createBrowserRouter, RouterProvider } from "react-router"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import AddFriendPage from "./pages/AddFriendPage"
import ChatAppLayout from "./layout/ChatAppLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "",
    element: <ChatAppLayout />,
    children: [
      {
        path: "/add-friend",
        element: <AddFriendPage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
