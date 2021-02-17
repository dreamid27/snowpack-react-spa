import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";

ReactDOM.render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById("root")
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
