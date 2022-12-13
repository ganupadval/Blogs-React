import React from "react";

export default function Qna() {
  return (
    <div>
      <div className="headline_container block_header">
        <div className="altblock"></div>
        <div className="headline_info" style={{textAlign: 'center'}}>
          <h2 className="qa_heading">
            <span className="mw-headline" id="qa_headline">
              Community Q&amp;A
            </span>
          </h2>
        </div>
      </div>

      <div style={{textAlign: 'center'}}>
        <h4> Ask a Question</h4>
        <div style={{display: 'block'}}>
        <div>
        <input placeholder="What is your Question" type={'text'}></input>

        </div>
        <button type="submit" className="btn btn-outline-primary btn-sm" >Submit</button>
        </div>
      </div>
    </div>
  );
}
