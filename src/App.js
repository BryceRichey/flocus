import {
  createBrowserRouter as Router,
  RouterProvider
} from "react-router-dom";
import AppLayout from "./routes/appLayout";
import ErrorPage from "./routes/error-page";
import CreateTask from "./views/createTask";
import ShowTask from "./views/showTask";

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
      }
    ]
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div >
  );
}

export default App;