import {
  createBrowserRouter as Router,
  RouterProvider
} from "react-router-dom";
import AppLayout from "./routes/appLayout";
import ErrorPage from "./routes/error-page";
import CreateTask from "./views/CreateTask";
import ShowTask from "./views/ShowTask";
import EditTask from "./views/EditTask";

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