import React from 'react';
const marked = window.marked;

function Preview(props) {
  return (
    <div className="preview">
      <div className="section-header">Preview (GitHub Flavored):</div>
      <div
        id="preview"
        className="preview__output markdown-body"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown),
        }}
      />
    </div>
  );
}

export default Preview;
