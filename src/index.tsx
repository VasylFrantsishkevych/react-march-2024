import ReactDOM from "react-dom/client";
import { routers } from "./routes/routes";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={routers} />
  </Provider>
);
