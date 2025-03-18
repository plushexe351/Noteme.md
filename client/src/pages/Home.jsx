import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UIContext } from "../context/UIContext";
import Sidebar from "../components/Sidebar/Sidebar";
import NotesList from "../components/NotesList/NotesList";
import Note from "../components/Note/Note";
import SettingsModal from "../components/Settings/SettingsModal";
import { WritingToolsContext } from "../context/WritingToolsContext";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useContext(AuthContext);

  const { setWritingToolsMode } = useContext(WritingToolsContext);
  const { settingsOpen } = useContext(UIContext);

  useEffect(() => {
    if (!loading && !currentUser) {
      navigate("/login");
    }
  }, [currentUser, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>; // ✅ Prevents flickering redirect
  }

  return (
    <div
      className="Home"
      onClick={(e) => {
        e.stopPropagation();
        setWritingToolsMode(false);
      }}
    >
      <Sidebar />
      <NotesList />
      <Note />
      {settingsOpen && <SettingsModal />}
    </div>
  );
};

export default Home;
