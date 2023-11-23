import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Registro } from "./Registro";
import { Upload } from "./Upload";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <Registro />
    <Upload />
  </BrowserRouter>
</Provider>
)
