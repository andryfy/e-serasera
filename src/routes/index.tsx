import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import ProfilePage from "../pages/ProfilePage";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import NotFoundPage from "../pages/error/NotFoundPage";
import ChatPage from "../pages/ChatPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to={"/home"} /> },
      { path: "/home", element: <HomePage /> },
      { path: "/messages", element: <ChatPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/signin", element: <SignInPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/reset-password", element: <ResetPasswordPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
