import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Crud } from "./crud";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <BrowserRouter>
      <Crud />
    </BrowserRouter>
  </Provider>
)
