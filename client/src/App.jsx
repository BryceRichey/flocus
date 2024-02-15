import {
  createBrowserRouter as Router,
  RouterProvider
} from "react-router-dom";
import AppLayout from "./routes/AppLayout.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import CreateTask from "./views/CreateTask.jsx";
import ShowTask from "./views/ShowTask.jsx";
import EditTask from "./views/EditTask.jsx";

const router = Router([
  {
    path: "tasks",
    element: <AppLayout />,
    children: [
      {
        path: "show",
        element: <ShowTask />,
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
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}