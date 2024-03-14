import { useContext } from "react";

import {
  createBrowserRouter as Router,
  RouterProvider
} from "react-router-dom";
import AppLayout from "./routes/AppLayout.jsx";
import SettingsLayout from "./routes/SettingsLayout.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import CreateTask from "./views/CreateTask.jsx";
import UpcomingTasks from "./views/UpcomingTasks.jsx";
import EditTask from "./views/EditTask.jsx";
import Details from "./components/settings/tabs/Details.jsx";
import Password from "./components/settings/tabs/Password.jsx";
import Boards from "./components/settings/tabs/Boards.jsx";
import Profile from "./components/settings/tabs/Profile.jsx";

import ThemeProvider from "./context/Theme.jsx"

const router = Router([
  {
    path: "tasks",
    element: <AppLayout />,
    children: [
      {
        path: "upcoming",
        element: <UpcomingTasks />,
      },
      {
        path: "create",
        element: <CreateTask />,
      },
      {
        path: ":taskId/edit",
        element: <EditTask />
      }
    ]
  },
  {
    path: "settings",
    element: <SettingsLayout />,
    children: [
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "Password",
        element: <Password />,
      },
      {
        path: "Boards",
        element: <Boards />,
      },
    ]
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  const theme = useContext(ThemeProvider);

  return (
    <div className={`${theme.isDarkMode ? 'dark' : ''} flex min-h-screen lm-bg-000 dark:dm-bg-900 transition duration-300`}>
      <RouterProvider router={router} />
    </div>
  );
}