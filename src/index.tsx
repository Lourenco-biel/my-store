import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Style/globalStyles";
import Home from "./Container/Home"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
<React.StrictMode>
    <Home />
    <GlobalStyle />
</React.StrictMode>
);