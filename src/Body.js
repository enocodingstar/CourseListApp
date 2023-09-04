import React, { useState } from 'react';
import { FaEdit, FaMinusCircle } from 'react-icons/fa';

function Body({ courses, setCourses }) {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [editIndex, setEditIndex] = useState(null); // Track the index of the course being edited

  const clearInputs = () => {
    setCourseName('');
    setCourseDescription('');
    setCourseCode('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredCourseName = courseName.trim();
    const enteredCourseDescription = courseDescription.trim();
    const enteredCourseCode = courseCode.trim();

    if (!enteredCourseName || !enteredCourseDescription || !enteredCourseCode) {
      alert('Please fill in all the required fields.');
      return;
    }

    if (editIndex !== null) {
      // Editing an existing course
      editCourse(editIndex, enteredCourseName, enteredCourseDescription, enteredCourseCode);
    } else if (isCourseCodeUnique(enteredCourseCode)) {
      // Adding a new course
      addCourse(enteredCourseName, enteredCourseDescription, enteredCourseCode);
    } else {
      alert('Course code cannot be repeated');
    }

    // Clear inputs and reset editIndex
    clearInputs();
    setEditIndex(null);
  };

  const isCourseCodeUnique = (code) => {
    return !courses.some((course) => course.code === code);
  };

  const addCourse = (name, description, code) => {
    const newCourse = {
      name,
      description,
      code,
    };

    const newCourses = [...courses, newCourse];
    setCourses(newCourses);
  };

  const editCourse = (index, name, description, code) => {
    const updatedCourses = [...courses];
    updatedCourses[index] = {
      name,
      description,
      code,
    };

    setCourses(updatedCourses);
  };

  const handleDeleteClick = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const handleEditClick = (index) => {
    const courseToEdit = courses[index];
    setCourseName(courseToEdit.name);
    setCourseDescription(courseToEdit.description);
    setCourseCode(courseToEdit.code);
    setEditIndex(index);
  };

  return (
    <div className="flex justify-center align-center wrap">
      <form className="input-section" onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="cName">Enter Course Name</label>
          <input
            type="text" name="cName" id="cName" value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="cDescription">Enter Course Description</label>
          <input
            type="text" name="cDescription" id="cDescription" value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="cCode">Enter Course Code</label>
          <input type="text" name="cCode" id="cCode" value={courseCode} 
            onChange={(e) => setCourseCode(e.target.value)}
          />
        </div>
        <button type="submit" className="button button-primary">
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>
      <div className="display-courses">
        <div className="grid g-by5">
          <strong>Course Name</strong>
          <strong>Course Description</strong>
          <strong>Course Code</strong>
          <strong></strong>
          <strong></strong>
        </div>
        <div className="list">
          {courses.map((course, index) => (
            <div className="grid g-by5" key={index}>
              <span>{course.name}</span>
              <span>{course.description}</span>
              <span>{course.code}</span>
              <button onClick={() => handleEditClick(index)}>
                <FaEdit />
              </button>
              <button onClick={() => handleDeleteClick(index)}>
                <FaMinusCircle />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
