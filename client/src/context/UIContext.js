import React, { createContext, useState } from "react";

export const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
  const [showTempNote, setShowTempNote] = useState(false);
  const [showNotesList, setShowNotesList] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <UIContext.Provider
      value={{
        showTempNote,
        setShowTempNote,
        showNotesList,
        setShowNotesList,
        showSidebar,
        setShowSidebar,
        settingsOpen,
        setSettingsOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
