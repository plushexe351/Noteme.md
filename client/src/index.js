import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { NotesContextProvider } from "./context/NotesContext";
import { WritingToolsContextProvider } from "./context/WritingToolsContext";
import { UIContextProvider } from "./context/UIContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <NotesContextProvider>
        <WritingToolsContextProvider>
          <UIContextProvider>
            <App />
          </UIContextProvider>
        </WritingToolsContextProvider>
      </NotesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
