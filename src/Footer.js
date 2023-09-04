import React from 'react';

function Footer({ clearAllCourses }) {
  return (
    <footer className="flex justify-center align-center">
      <button className="button" onClick={clearAllCourses}>Clear All</button>
      <button className="button">Save as PDF </button>
    </footer>
  );
}

export default Footer;
