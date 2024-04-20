import React from "react";



const CreateNote = ({ inputText, setInputText, saveHandler }) => {
    const char= 5000;
    const charLimit = char - inputText.length;
 
    return (
    <div className="note">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={inputText}
        placeholder="type"
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <div className="note_footer">
        <span className="lable">{charLimit} Left</span>
        <button className="note_save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
