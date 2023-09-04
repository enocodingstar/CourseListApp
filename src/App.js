import React, { useState } from 'react';
import './App.scss';
import Body from './Body';
import Footer from './Footer';
import Header from "./Header";

function App() {
  const [theme, setTheme] = useState('light-mode');

  // State for storing courses
  const [courses, setCourses] = useState([]);

  // Function to clear all courses
  const clearAllCourses = () => {
    setCourses([]);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-mode' ? 'dark-mode' : 'light-mode'));
  };

  return (
    <main className={theme}>
      <Header toggleTheme={toggleTheme} />
      <Body courses={courses} setCourses={setCourses} />
      <Footer clearAllCourses={clearAllCourses} />
    </main>
  );
}

export default App;
