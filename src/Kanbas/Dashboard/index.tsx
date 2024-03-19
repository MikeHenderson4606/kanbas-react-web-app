import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard (
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {

  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h5>Course</h5>
      <input placeholder={course.name} className="form-control" 
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input placeholder={course.number} className="form-control" 
        onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date" 
        onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
      <input value={course.endDate} className="form-control" type="date" 
        onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <div className="d-grid gap-2 d-md-flex my-2">
        <h2>Published Courses (12)</h2> 
        <button className="btn btn-success btn-lg justify-content-sm-end" onClick={() => addNewCourse()}>
          Add
        </button>
        <button className="btn btn-warning btn-lg justify-content-sm-end" onClick={() => updateCourse()}>
          Update
        </button>
      </div>  <hr />
      
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                  <button className="btn btn-warning justify-content-end ms-1" onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                    Edit
                  </button>
                  <button className="btn btn-danger justify-content-end ms-1" onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;