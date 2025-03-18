import React, { createContext, useState } from "react";

export const WritingToolsContext = createContext();

export const WritingToolsContextProvider = ({ children }) => {
  const [writingToolsMode, setWritingToolsMode] = useState(false);
  const [resultGlobal, setResultGlobal] = useState("");

  return (
    <WritingToolsContext.Provider
      value={{
        writingToolsMode,
        setWritingToolsMode,
        resultGlobal,
        setResultGlobal,
      }}
    >
      {children}
    </WritingToolsContext.Provider>
  );
};
