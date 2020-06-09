import React from 'react';

function Editor(props) {
  return (
    <div className="editor">
      <div className="section-header">Editor (Markdown):</div>
      <textarea
        id="editor"
        className="editor__input"
        value={props.markdown}
        onChange={props.onChange}
        type="text"
        placeholder="Insert markdown here..."
      />
    </div>
  );
}

export default Editor;
