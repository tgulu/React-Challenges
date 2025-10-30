import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import UseEffect from "./components/UseEffect/UseEffect";
import UseState from "./components/UseState/UseState";
import Form from "./components/Form/Form";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <div style={{ padding: 16 }}>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "api",
        element: <About />,
      },
      {
        path: "useEffect",
        element: <UseEffect />,
      },
      {
        path: "useState",
        element: <UseState />,
      },
      {
        path: "state",
        element: <Form />,
      },
      {
        path: "*",
        element: (
          <div style={{ padding: 16 }}>
            <h1>Page not found</h1>
            <p>The page you are looking for does not exist.</p>
          </div>
        ),
      },
    ],
  },
];

export default routes;
