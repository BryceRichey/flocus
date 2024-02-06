import CreateTask from "./views/createTask";
import {
  createBrowserRouter as Router,
  RouterProvider
} from "react-router-dom";
import AppLayout from "./routes/appLayout";
import ErrorPage from "./routes/error-page";

const router = Router([
  {
    path: "tasks/",
    element: <AppLayout />,
    children: [
      {
        path: "create/",
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