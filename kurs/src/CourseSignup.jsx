import React, { useState } from "react";

const CourseSignup = () => {
  const courses = [
    "Programowanie w C#",
    "Angular dla początkujących",
    "Kurs Django"
  ];

  const [fullName, setFullName] = useState('');
  const [courseNumber, setCourseNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const idx = Number(courseNumber) - 1;
    if (idx >= 0 && idx < courses.length) {
      console.log(`Imię i nazwisko: ${fullName}`);
      console.log(`Kurs: ${courses[idx]}`);
    } else {
      console.log("Nieprawidłowy numer kursu");
    }
  };

  return (
    <div className="container">
      <div className="courseSignup container mt-5">
        <h2 className="courseHeader">Liczba kursów: {courses.length}</h2>
        <ol className="courseList">
          {courses.map((course, idx) => (
            <li key={idx} className="course-list-item">{course}</li>
          ))}
        </ol>

        <form onSubmit={handleSubmit} className="courseForm mt-4">
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label course-signup-label">Imię i nazwisko:</label>
            <input
              type="text"
              id="fullName"
              className="form-control course-signup-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="courseNumber" className="form-label course-signup-label">Numer kursu:</label>
            <input
              type="number"
              id="courseNumber"
              className="form-control course-signup-input"
              value={courseNumber}
              onChange={(e) => setCourseNumber(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary course-signup-button">Zapisz do kursu</button>
        </form>
      </div>
    </div>
  );
};

export default CourseSignup;
