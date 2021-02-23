import React from 'react';
import './HorizontalLine';

function HorizontalLine({ sectionTitle }) {
  let div = {
    margin: '.75rem .75rem',
  };
  let h2 = {
    width: '100%',
    textAlign: 'center',
    borderBottom: '3px solid #0f9d58',
    lineHeight: '0.1em',
    margin: '5px 0 5px',
  };
  let span = {
    fontSize: '25px',
    background: '#f9fafb',
    padding: '0px 10px',
    color: '#4285f4',
    fontWeight: 'bold',
  };

  return (
    <div style={div}>
      <h2 className="horizontalLine" style={h2}>
        <span className="theme-dark:bg-black" style={span}>
          {sectionTitle}
        </span>
      </h2>
    </div>
  );
}

export default HorizontalLine;
