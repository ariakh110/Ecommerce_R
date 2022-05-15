import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+91-123-456-7890</label>
            <i className="fa fa-envelope"></i>
            <label>Info@ariakhayer.com</label>
          </div>
          <div className="right row Rtext">
            <label>theme FAQ'S</label>
            <label>Need Helps</label>
            <span>🏳️</span>
            <label>EN</label>
            <span>🏳️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
