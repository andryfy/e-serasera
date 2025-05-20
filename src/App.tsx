import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div className="h-full" data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
