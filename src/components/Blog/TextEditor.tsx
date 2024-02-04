import { useState } from "react";
import { Editor, EditorState } from 'draft-js';

import 'draft-js/dist/Draft.css';

export default function TextEditor() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className="App">
      <header className="App-header">
        Rich Text Editor Example
      </header>

      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />
    </div>
  )
}