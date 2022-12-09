import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import Main from "./components/Main";
import { queryClient } from "./components/QueryProvider";
import reportWebVitals from "./reportWebVitals";
import MovieDetail from "./routes/Movie";
import { movieLoader } from "./routes/Movie/movie.helper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/movies-app/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "movies/:movieId",
        loader: () => movieLoader(queryClient),
        element: <MovieDetail />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
