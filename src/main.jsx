import ReactDOM from "react-dom/client";

import config from "@/config";

const { auth0 } = config;

import App from "./App.jsx";
// import "./styles/index.less";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
