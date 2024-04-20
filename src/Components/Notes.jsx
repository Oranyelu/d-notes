import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import "./notes.css";
import { v4 as uuid } from "uuid";
import Note from "./Note";
const Notes = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
    const [editToggle, setEditToggle] = useState (null)
    //const [delete, setDelete]

    //console.log(editToggle)
const editHandler = (id, text) =>{
   setEditToggle(id)
   setInputText(text)
};

  const saveHandler = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
        {
            notes.map((note) => (
                editToggle === note.id ?
                <CreateNote
        inputText={inputText}
        setInputText={setInputText}
        saveHandler={saveHandler}
      />
      :
                <Note
                key= {note.id}
                id={note.id}
                text={note.text}
                editHandler = {editHandler}
                >

                </Note>
            ))
        }

      <CreateNote
        inputText={inputText}
        setInputText={setInputText}
        saveHandler={saveHandler}
      />
    </div>
  );
};

export default Notes;
