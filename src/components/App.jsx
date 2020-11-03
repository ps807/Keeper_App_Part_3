import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <Note key={1} title="Note title" content="Note content" />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
